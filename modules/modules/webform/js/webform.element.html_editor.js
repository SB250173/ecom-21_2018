/**
 * @file
 * Javascript behaviors for HTML editor integration.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  // @see http://docs.ckeditor.com/#!/api/CKEDITOR.config
  Drupal.webform = Drupal.webform || {};
  Drupal.webform.htmlEditor = Drupal.webform.htmlEditor || {};
  Drupal.webform.htmlEditor.options = Drupal.webform.htmlEditor.options || {};

  /**
   * Initialize HTML Editor.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformHtmlEditor = {
    attach: function (context) {
      $(context).find('.js-form-type-webform-html-editor textarea').once('webform-html-editor').each(function () {
        var allowedContent = drupalSettings['webform']['html_editor']['allowedContent'];
        var $textarea = $(this);

        var options = {
          // Turn off external config and styles.
          customConfig: '',
          stylesSet: false,
          contentsCss: [],
          allowedContent: allowedContent,
          // Use <br> tags instead of <p> tags.
          enterMode: CKEDITOR.ENTER_BR,
          shiftEnterMode: CKEDITOR.ENTER_BR,
          // Set auto grow.
          extraPlugins: 'autogrow',
          height: '100px',
          autoGrow_minHeight: 100,
          autoGrow_maxHeight: 300,
          // Remove status bar.
          resize_enabled: false,
          removePlugins: 'elementspath,magicline',
          // Toolbar settings.
          format_tags: 'p;h2;h3;h4;h5;h6',
          toolbar: [
            {name: 'styles', items: ['Format', 'Font', 'FontSize' ]},
            {name: 'basicstyles', items: [ 'Bold', 'Italic', 'Subscript', 'Superscript' ]},
            {name: 'insert', items: [ 'SpecialChar' ]},
            {name: 'colors', items: [ 'TextColor', 'BGColor' ]},
            {name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']},
            {name: 'links', items: [ 'Link', 'Unlink']},
            {name: 'tools', items: [ 'Source', '-', 'Maximize' ]}
          ]
        };

        // Add IMCE image button.
        if (CKEDITOR.imce) {
          options.extraPlugins += ',imce';
          options.toolbar[2].items = [ 'ImceImage', 'SpecialChar' ];
          CKEDITOR.config.ImceImageIcon = drupalSettings['webform']['html_editor']['ImceImageIcon'];
        }

        options = $.extend(options, Drupal.webform.htmlEditor.options);

        CKEDITOR.replace(this.id, options).on('change', function (evt) {
          // Save data onchange since AJAX dialogs don't execute webform.onsubmit.
          $textarea.val(evt.editor.getData().trim());
        });
      })
    }
  };

})(jQuery, Drupal, drupalSettings);
