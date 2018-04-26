/**
 * @file
 * Dialog API inspired by HTML5 dialog element.
 *
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#the-dialog-element
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Default dialog options.
   *
   * @type {object}
   *
   * @prop {bool} [autoOpen=true]
   * @prop {string} [dialogClass='']
   * @prop {string} [buttonClass='button']
   * @prop {string} [buttonPrimaryClass='button--primary']
   * @prop {function} close
   */
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',
    // Drupal-specific extensions: see dialog.jquery-ui.js.
    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    // When using this API directly (when generating dialogs on the client
    // side), you may want to override this method and do
    // `jQuery(event.target).remove()` as well, to remove the dialog on
    // closing.
    close: function (event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  /**
   * @typedef {object} Drupal.dialog~dialogDefinition
   *
   * @prop {boolean} open
   *   Is the dialog open or not.
   * @prop {*} returnValue
   *   Return value of the dialog.
   * @prop {function} show
   *   Method to display the dialog on the page.
   * @prop {function} showModal
   *   Method to display the dialog as a modal on the page.
   * @prop {function} close
   *   Method to hide the dialog from the page.
   */

  /**
   * Polyfill HTML5 dialog element with jQueryUI.
   *
   * @param {HTMLElement} element
   *   The element that holds the dialog.
   * @param {object} options
   *   jQuery UI options to be passed to the dialog.
   *
   * @return {Drupal.dialog~dialogDefinition}
   *   The dialog instance.
   */
  Drupal.dialog = function (element, options) {
    var undef;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef,
      show: function () {
        openDialog({modal: false});
      },
      showModal: function () {
        openDialog({modal: true});
      },
      close: closeDialog
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);
      // Trigger a global event to allow scripts to bind events to the dialog.
      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    return dialog;
  };

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Positioning extensions for dialogs.
 */

/**
 * Triggers when content inside a dialog changes.
 *
 * @event dialogContentResize
 */

(function ($, Drupal, drupalSettings, debounce, displace) {

  'use strict';

  // autoResize option will turn off resizable and draggable.
  drupalSettings.dialog = $.extend({autoResize: true, maxHeight: '95%'}, drupalSettings.dialog);

  /**
   * Resets the current options for positioning.
   *
   * This is used as a window resize and scroll callback to reposition the
   * jQuery UI dialog. Although not a built-in jQuery UI option, this can
   * be disabled by setting autoResize: false in the options array when creating
   * a new {@link Drupal.dialog}.
   *
   * @function Drupal.dialog~resetSize
   *
   * @param {jQuery.Event} event
   *   The event triggered.
   *
   * @fires event:dialogContentResize
   */
  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option;
    var optionValue;
    var adjustedValue;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        // jQuery UI does not support percentages on heights, convert to pixels.
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          // Take offsets in account.
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);
          // Don't force the dialog to be bigger vertically than needed.
          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }
    // Offset the dialog center to be at the center of Drupal.displace.offsets.
    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }
    event.data.$element
      .dialog('option', adjustedOptions)
      .trigger('dialogContentResize');
  }

  /**
   * Position the dialog's center at the center of displace.offsets boundaries.
   *
   * @function Drupal.dialog~resetPosition
   *
   * @param {object} options
   *   Options object.
   *
   * @return {object}
   *   Altered options object.
   */
  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;

    var leftString = (left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)) + 'px';
    var topString = (top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)) + 'px';
    options.position = {
      my: 'center' + (left !== 0 ? leftString : '') + ' center' + (top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  $(window).on({
    'dialog:aftercreate': function (event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = {settings: settings, $element: $element};
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element
          .dialog('option', {resizable: false, draggable: false})
          .dialog('widget').css('position', 'fixed');
        $(window)
          .on('resize.dialogResize scroll.dialogResize', eventData, autoResize)
          .trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function (event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });

})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);
;
/**
 * @file
 * Adds default classes to buttons for styling purposes.
 */

(function ($) {

  'use strict';

  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function () {
      var opts = this.options;
      var primaryIndex;
      var $buttons;
      var index;
      var il = opts.buttons.length;
      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }
      this._super();
      $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });

})(jQuery);
;
/**
 * @file
 * Extends the Drupal AJAX functionality to integrate the dialog API.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Initialize dialogs for Ajax purposes.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behaviors for dialog ajax functionality.
   */
  Drupal.behaviors.dialog = {
    attach: function (context, settings) {
      var $context = $(context);

      // Provide a known 'drupal-modal' DOM element for Drupal-based modal
      // dialogs. Non-modal dialogs are responsible for creating their own
      // elements, since there can be multiple non-modal dialogs at a time.
      if (!$('#drupal-modal').length) {
        // Add 'ui-front' jQuery UI class so jQuery UI widgets like autocomplete
        // sit on top of dialogs. For more information see
        // http://api.jqueryui.com/theming/stacking-elements/.
        $('<div id="drupal-modal" class="ui-front"/>').hide().appendTo('body');
      }

      // Special behaviors specific when attaching content within a dialog.
      // These behaviors usually fire after a validation error inside a dialog.
      var $dialog = $context.closest('.ui-dialog-content');
      if ($dialog.length) {
        // Remove and replace the dialog buttons with those from the new form.
        if ($dialog.dialog('option', 'drupalAutoButtons')) {
          // Trigger an event to detect/sync changes to buttons.
          $dialog.trigger('dialogButtonsChange');
        }

        // Force focus on the modal when the behavior is run.
        $dialog.dialog('widget').trigger('focus');
      }

      var originalClose = settings.dialog.close;
      // Overwrite the close method to remove the dialog on closing.
      settings.dialog.close = function (event) {
        originalClose.apply(settings.dialog, arguments);
        $(event.target).remove();
      };
    },

    /**
     * Scan a dialog for any primary buttons and move them to the button area.
     *
     * @param {jQuery} $dialog
     *   An jQuery object containing the element that is the dialog target.
     *
     * @return {Array}
     *   An array of buttons that need to be added to the button area.
     */
    prepareDialogButtons: function ($dialog) {
      var buttons = [];
      var $buttons = $dialog.find('.form-actions input[type=submit], .form-actions a.button');
      $buttons.each(function () {
        // Hidden form buttons need special attention. For browser consistency,
        // the button needs to be "visible" in order to have the enter key fire
        // the form submit event. So instead of a simple "hide" or
        // "display: none", we set its dimensions to zero.
        // See http://mattsnider.com/how-forms-submit-when-pressing-enter/
        var $originalButton = $(this).css({
          display: 'block',
          width: 0,
          height: 0,
          padding: 0,
          border: 0,
          overflow: 'hidden'
        });
        buttons.push({
          text: $originalButton.html() || $originalButton.attr('value'),
          class: $originalButton.attr('class'),
          click: function (e) {
            // If the original button is an anchor tag, triggering the "click"
            // event will not simulate a click. Use the click method instead.
            if ($originalButton.is('a')) {
              $originalButton[0].click();
            }
            else {
              $originalButton.trigger('mousedown').trigger('mouseup').trigger('click');
              e.preventDefault();
            }
          }
        });
      });
      return buttons;
    }
  };

  /**
   * Command to open a dialog.
   *
   * @param {Drupal.Ajax} ajax
   *   The Drupal Ajax object.
   * @param {object} response
   *   Object holding the server response.
   * @param {number} [status]
   *   The HTTP status code.
   *
   * @return {bool|undefined}
   *   Returns false if there was no selector property in the response object.
   */
  Drupal.AjaxCommands.prototype.openDialog = function (ajax, response, status) {
    if (!response.selector) {
      return false;
    }
    var $dialog = $(response.selector);
    if (!$dialog.length) {
      // Create the element if needed.
      $dialog = $('<div id="' + response.selector.replace(/^#/, '') + '" class="ui-front"/>').appendTo('body');
    }
    // Set up the wrapper, if there isn't one.
    if (!ajax.wrapper) {
      ajax.wrapper = $dialog.attr('id');
    }

    // Use the ajax.js insert command to populate the dialog contents.
    response.command = 'insert';
    response.method = 'html';
    ajax.commands.insert(ajax, response, status);

    // Move the buttons to the jQuery UI dialog buttons area.
    if (!response.dialogOptions.buttons) {
      response.dialogOptions.drupalAutoButtons = true;
      response.dialogOptions.buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
    }

    // Bind dialogButtonsChange.
    $dialog.on('dialogButtonsChange', function () {
      var buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
      $dialog.dialog('option', 'buttons', buttons);
    });

    // Open the dialog itself.
    response.dialogOptions = response.dialogOptions || {};
    var dialog = Drupal.dialog($dialog.get(0), response.dialogOptions);
    if (response.dialogOptions.modal) {
      dialog.showModal();
    }
    else {
      dialog.show();
    }

    // Add the standard Drupal class for buttons for style consistency.
    $dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions');
  };

  /**
   * Command to close a dialog.
   *
   * If no selector is given, it defaults to trying to close the modal.
   *
   * @param {Drupal.Ajax} [ajax]
   *   The ajax object.
   * @param {object} response
   *   Object holding the server response.
   * @param {string} response.selector
   *   The selector of the dialog.
   * @param {bool} response.persist
   *   Whether to persist the dialog element or not.
   * @param {number} [status]
   *   The HTTP status code.
   */
  Drupal.AjaxCommands.prototype.closeDialog = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      Drupal.dialog($dialog.get(0)).close();
      if (!response.persist) {
        $dialog.remove();
      }
    }

    // Unbind dialogButtonsChange.
    $dialog.off('dialogButtonsChange');
  };

  /**
   * Command to set a dialog property.
   *
   * JQuery UI specific way of setting dialog options.
   *
   * @param {Drupal.Ajax} [ajax]
   *   The Drupal Ajax object.
   * @param {object} response
   *   Object holding the server response.
   * @param {string} response.selector
   *   Selector for the dialog element.
   * @param {string} response.optionsName
   *   Name of a key to set.
   * @param {string} response.optionValue
   *   Value to set.
   * @param {number} [status]
   *   The HTTP status code.
   */
  Drupal.AjaxCommands.prototype.setDialogOption = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      $dialog.dialog('option', response.optionName, response.optionValue);
    }
  };

  /**
   * Binds a listener on dialog creation to handle the cancel link.
   *
   * @param {jQuery.Event} e
   *   The event triggered.
   * @param {Drupal.dialog~dialogDefinition} dialog
   *   The dialog instance.
   * @param {jQuery} $element
   *   The jQuery collection of the dialog element.
   * @param {object} [settings]
   *   Dialog settings.
   */
  $(window).on('dialog:aftercreate', function (e, dialog, $element, settings) {
    $element.on('click.dialog', '.dialog-cancel', function (e) {
      dialog.close('cancel');
      e.preventDefault();
      e.stopPropagation();
    });
  });

  /**
   * Removes all 'dialog' listeners.
   *
   * @param {jQuery.Event} e
   *   The event triggered.
   * @param {Drupal.dialog~dialogDefinition} dialog
   *   The dialog instance.
   * @param {jQuery} $element
   *   jQuery collection of the dialog element.
   */
  $(window).on('dialog:beforeclose', function (e, dialog, $element) {
    $element.off('.dialog');
  });

})(jQuery, Drupal);
;
/**
 * @file
 * Machine name functionality.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Attach the machine-readable name form element behavior.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches machine-name behaviors.
   */
  Drupal.behaviors.machineName = {

    /**
     * Attaches the behavior.
     *
     * @param {Element} context
     *   The context for attaching the behavior.
     * @param {object} settings
     *   Settings object.
     * @param {object} settings.machineName
     *   A list of elements to process, keyed by the HTML ID of the form
     *   element containing the human-readable value. Each element is an object
     *   defining the following properties:
     *   - target: The HTML ID of the machine name form element.
     *   - suffix: The HTML ID of a container to show the machine name preview
     *     in (usually a field suffix after the human-readable name
     *     form element).
     *   - label: The label to show for the machine name preview.
     *   - replace_pattern: A regular expression (without modifiers) matching
     *     disallowed characters in the machine name; e.g., '[^a-z0-9]+'.
     *   - replace: A character to replace disallowed characters with; e.g.,
     *     '_' or '-'.
     *   - standalone: Whether the preview should stay in its own element
     *     rather than the suffix of the source element.
     *   - field_prefix: The #field_prefix of the form element.
     *   - field_suffix: The #field_suffix of the form element.
     */
    attach: function (context, settings) {
      var self = this;
      var $context = $(context);
      var timeout = null;
      var xhr = null;

      function clickEditHandler(e) {
        var data = e.data;
        data.$wrapper.removeClass('visually-hidden');
        data.$target.trigger('focus');
        data.$suffix.hide();
        data.$source.off('.machineName');
      }

      function machineNameHandler(e) {
        var data = e.data;
        var options = data.options;
        var baseValue = $(e.target).val();

        var rx = new RegExp(options.replace_pattern, 'g');
        var expected = baseValue.toLowerCase().replace(rx, options.replace).substr(0, options.maxlength);

        // Abort the last pending request because the label has changed and it
        // is no longer valid.
        if (xhr && xhr.readystate !== 4) {
          xhr.abort();
          xhr = null;
        }

        // Wait 300 milliseconds since the last event to update the machine name
        // i.e., after the user has stopped typing.
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        timeout = setTimeout(function () {
          if (baseValue.toLowerCase() !== expected) {
            xhr = self.transliterate(baseValue, options).done(function (machine) {
              self.showMachineName(machine.substr(0, options.maxlength), data);
            });
          }
          else {
            self.showMachineName(expected, data);
          }
        }, 300);
      }

      Object.keys(settings.machineName).forEach(function (source_id) {
        var machine = '';
        var eventData;
        var options = settings.machineName[source_id];

        var $source = $context.find(source_id).addClass('machine-name-source').once('machine-name');
        var $target = $context.find(options.target).addClass('machine-name-target');
        var $suffix = $context.find(options.suffix);
        var $wrapper = $target.closest('.js-form-item');
        // All elements have to exist.
        if (!$source.length || !$target.length || !$suffix.length || !$wrapper.length) {
          return;
        }
        // Skip processing upon a form validation error on the machine name.
        if ($target.hasClass('error')) {
          return;
        }
        // Figure out the maximum length for the machine name.
        options.maxlength = $target.attr('maxlength');
        // Hide the form item container of the machine name form element.
        $wrapper.addClass('visually-hidden');
        // Determine the initial machine name value. Unless the machine name
        // form element is disabled or not empty, the initial default value is
        // based on the human-readable form element value.
        if ($target.is(':disabled') || $target.val() !== '') {
          machine = $target.val();
        }
        else if ($source.val() !== '') {
          machine = self.transliterate($source.val(), options);
        }
        // Append the machine name preview to the source field.
        var $preview = $('<span class="machine-name-value">' + options.field_prefix + Drupal.checkPlain(machine) + options.field_suffix + '</span>');
        $suffix.empty();
        if (options.label) {
          $suffix.append('<span class="machine-name-label">' + options.label + ': </span>');
        }
        $suffix.append($preview);

        // If the machine name cannot be edited, stop further processing.
        if ($target.is(':disabled')) {
          return;
        }

        eventData = {
          $source: $source,
          $target: $target,
          $suffix: $suffix,
          $wrapper: $wrapper,
          $preview: $preview,
          options: options
        };
        // If it is editable, append an edit link.
        var $link = $('<span class="admin-link"><button type="button" class="link">' + Drupal.t('Edit') + '</button></span>').on('click', eventData, clickEditHandler);
        $suffix.append($link);

        // Preview the machine name in realtime when the human-readable name
        // changes, but only if there is no machine name yet; i.e., only upon
        // initial creation, not when editing.
        if ($target.val() === '') {
          $source.on('formUpdated.machineName', eventData, machineNameHandler)
            // Initialize machine name preview.
            .trigger('formUpdated.machineName');
        }

        // Add a listener for an invalid event on the machine name input
        // to show its container and focus it.
        $target.on('invalid', eventData, clickEditHandler);
      });
    },

    showMachineName: function (machine, data) {
      var settings = data.options;
      // Set the machine name to the transliterated value.
      if (machine !== '') {
        if (machine !== settings.replace) {
          data.$target.val(machine);
          data.$preview.html(settings.field_prefix + Drupal.checkPlain(machine) + settings.field_suffix);
        }
        data.$suffix.show();
      }
      else {
        data.$suffix.hide();
        data.$target.val(machine);
        data.$preview.empty();
      }
    },

    /**
     * Transliterate a human-readable name to a machine name.
     *
     * @param {string} source
     *   A string to transliterate.
     * @param {object} settings
     *   The machine name settings for the corresponding field.
     * @param {string} settings.replace_pattern
     *   A regular expression (without modifiers) matching disallowed characters
     *   in the machine name; e.g., '[^a-z0-9]+'.
     * @param {string} settings.replace_token
     *   A token to validate the regular expression.
     * @param {string} settings.replace
     *   A character to replace disallowed characters with; e.g., '_' or '-'.
     * @param {number} settings.maxlength
     *   The maximum length of the machine name.
     *
     * @return {jQuery}
     *   The transliterated source string.
     */
    transliterate: function (source, settings) {
      return $.get(Drupal.url('machine_name/transliterate'), {
        text: source,
        langcode: drupalSettings.langcode,
        replace_pattern: settings.replace_pattern,
        replace_token: settings.replace_token,
        replace: settings.replace,
        lowercase: true
      });
    }
  };

})(jQuery, Drupal, drupalSettings);
;
