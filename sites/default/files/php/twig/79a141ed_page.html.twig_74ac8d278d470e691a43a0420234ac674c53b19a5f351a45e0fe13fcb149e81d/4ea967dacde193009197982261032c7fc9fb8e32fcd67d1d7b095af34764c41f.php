<?php

/* themes/ko_d8_theme/templates/layout/page.html.twig */
class __TwigTemplate_088599dec15f6b4de662764f6371bd9a8ce84cbb6b836f9a6e6198e32e030fef extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 74);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('if'),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setTemplateFile($this->getTemplateName());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 60
        echo "

<!-- Header and Navbar -->
<header class=\"main-header\">
  <nav class=\"navbar navbar-default\" role=\"navigation\">
    <div class=\"container\">
      <div class=\"row\">
      <div class=\"navbar-header col-md-2\">
        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#main-navigation\">
          <span class=\"sr-only\">Toggle navigation</span>
          <span class=\"icon-bar\"></span>
          <span class=\"icon-bar\"></span>
          <span class=\"icon-bar\"></span>
        </button>
        ";
        // line 74
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array())) {
            // line 75
            echo "          ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "header", array()), "html", null, true));
            echo "
        ";
        }
        // line 77
        echo "      </div>

      <!-- Navigation -->
      <div class=\"col-md-10\">
        ";
        // line 81
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "primary_menu", array())) {
            // line 82
            echo "          ";
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "primary_menu", array()), "html", null, true));
            echo "
        ";
        }
        // line 83
        echo "      
      </div>
      <!--End Navigation -->
      </div>
    </div>
  </nav>
  \t  <!-- Banner -->
\t  ";
        // line 90
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "welcome_banner_text", array())) {
            echo "  
\t\t<div class=\"container welcome-banner-text\">
\t\t  <div class=\"row\">
\t\t\t<div class=\"col-md-12\">
\t\t\t\t";
            // line 94
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "welcome_banner_text", array()), "html", null, true));
            echo "
\t\t\t</div>
\t\t  </div>
\t\t</div>
\t  ";
        }
        // line 99
        echo "\t  <!-- End Banner -->

  

</header>
<!--End Header & Navbar -->


<!--Highlighted-->
  ";
        // line 108
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "highlighted", array())) {
            // line 109
            echo "    <div class=\"container\">
      <div class=\"row\">
        <div class=\"col-md-12\">
          ";
            // line 112
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "highlighted", array()), "html", null, true));
            echo "
        </div>
      </div>
    </div>
  ";
        }
        // line 117
        echo "<!--End Highlighted-->


<!-- Start Top Widget -->
";
        // line 121
        if ((isset($context["is_front"]) ? $context["is_front"] : null)) {
            echo "  
  ";
            // line 122
            if ((($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "topwidget_first", array()) || $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "topwidget_second", array())) || $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "topwidget_third", array()))) {
                // line 123
                echo "    <div class=\"topwidget\">
      <!-- start: Container -->
      <div class=\"container\">
        
        <div class=\"row\">
          <!-- Top widget first region -->
          <div class = ";
                // line 129
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["topwidget_class"]) ? $context["topwidget_class"] : null), "html", null, true));
                echo ">
            ";
                // line 130
                if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "topwidget_first", array())) {
                    // line 131
                    echo "              ";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "topwidget_first", array()), "html", null, true));
                    echo "
            ";
                }
                // line 133
                echo "          </div>
          <!-- End top widget third region -->
          <!-- Top widget second region -->
          <div class = ";
                // line 136
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["topwidget_class"]) ? $context["topwidget_class"] : null), "html", null, true));
                echo ">
            ";
                // line 137
                if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "topwidget_second", array())) {
                    // line 138
                    echo "              ";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "topwidget_second", array()), "html", null, true));
                    echo "
            ";
                }
                // line 140
                echo "          </div>
          <!-- End top widget third region -->
          <!-- Top widget third region -->
          <div class = ";
                // line 143
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["topwidget_third_class"]) ? $context["topwidget_third_class"] : null), "html", null, true));
                echo ">
            ";
                // line 144
                if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "topwidget_third", array())) {
                    // line 145
                    echo "              ";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "topwidget_third", array()), "html", null, true));
                    echo "
            ";
                }
                // line 147
                echo "          </div>
          <!-- End top widget third region -->
        </div>
      </div>
    </div>
  ";
            }
        }
        // line 154
        echo "<!--End Top Widget -->


<!-- Page Title -->
";
        // line 158
        if (($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "page_title", array()) &&  !(isset($context["is_front"]) ? $context["is_front"] : null))) {
            // line 159
            echo "  <div id=\"page-title\">
    <div id=\"page-title-inner\">
      <!-- start: Container -->
      <div class=\"container\">
        ";
            // line 163
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "page_title", array()), "html", null, true));
            echo "
      </div>
    </div>
  </div>
";
        }
        // line 168
        echo "<!-- End Page Title ---- >


<!-- layout -->
<div id=\"wrapper\">
  <!-- start: Container -->
  <div class=\"container\">
    
    <!--Content top-->
      ";
        // line 177
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content_top", array())) {
            // line 178
            echo "        <div class=\"row\">
          ";
            // line 179
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content_top", array()), "html", null, true));
            echo "
        </div>
      ";
        }
        // line 182
        echo "    <!--End Content top-->
    
    <!--start:content -->
    <div class=\"row\">
      <div class=\"col-md-12\">";
        // line 186
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "breadcrumb", array()), "html", null, true));
        echo "</div>
    </div>

    <div class=\"row layout\">
      <!--- Start Left SideBar -->
      ";
        // line 191
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "sidebar_first", array())) {
            // line 192
            echo "        <div class=\"sidebar\" >
          <div class = ";
            // line 193
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["sidebarfirst"]) ? $context["sidebarfirst"] : null), "html", null, true));
            echo " >
            ";
            // line 194
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "sidebar_first", array()), "html", null, true));
            echo "
          </div>
        </div>
      ";
        }
        // line 198
        echo "      <!---End Right SideBar -->

      <!--- Start content -->
      ";
        // line 201
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array())) {
            // line 202
            echo "        <div class=\"content_layout\">
          <div class=";
            // line 203
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["contentlayout"]) ? $context["contentlayout"] : null), "html", null, true));
            echo ">
            ";
            // line 204
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content", array()), "html", null, true));
            echo "
          </div>
        </div>
      ";
        }
        // line 208
        echo "      <!---End content -->

      <!--- Start Right SideBar -->
      ";
        // line 211
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "sidebar_second", array())) {
            // line 212
            echo "        <div class=\"sidebar\">
          <div class=";
            // line 213
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["sidebarsecond"]) ? $context["sidebarsecond"] : null), "html", null, true));
            echo ">
            ";
            // line 214
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "sidebar_second", array()), "html", null, true));
            echo "
          </div>
        </div>
      ";
        }
        // line 218
        echo "      <!---End Right SideBar -->
      
    </div>
    <!--End Content -->

    <!--Start Content Bottom-->
    ";
        // line 224
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content_bottom", array())) {
            // line 225
            echo "      <div class=\"row\">
        ";
            // line 226
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "content_bottom", array()), "html", null, true));
            echo "
      </div>
    ";
        }
        // line 229
        echo "    <!--End Content Bottom-->
  </div>
</div>
<!-- End layout -->






<!-- Start bottom --> 
";
        // line 240
        if (((($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "bottom_first", array()) || $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "bottom_second", array())) || $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "bottom_third", array())) || $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "bottom_forth", array()))) {
            // line 241
            echo "  <div class=\"bottom-widgets\">
    <!-- Start Container -->
    <div class=\"container\">
      
      <div class=\"row\">

        <!-- Start Bottom First Region -->
        <div class = ";
            // line 248
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["bottom_class"]) ? $context["bottom_class"] : null), "html", null, true));
            echo ">
          ";
            // line 249
            if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "bottom_first", array())) {
                // line 250
                echo "            ";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "bottom_first", array()), "html", null, true));
                echo "
          ";
            }
            // line 252
            echo "        </div>
        <!-- End Bottom First Region -->

        <!-- Start Bottom Second Region -->
        <div class = ";
            // line 256
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["bottom_class"]) ? $context["bottom_class"] : null), "html", null, true));
            echo ">
          ";
            // line 257
            if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "bottom_second", array())) {
                // line 258
                echo "            ";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "bottom_second", array()), "html", null, true));
                echo "
          ";
            }
            // line 260
            echo "        </div>
        <!-- End Bottom Second Region -->

        <!-- Start Bottom third Region -->
        <div class = ";
            // line 264
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["bottom_class"]) ? $context["bottom_class"] : null), "html", null, true));
            echo ">
          ";
            // line 265
            if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "bottom_third", array())) {
                // line 266
                echo "            ";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "bottom_third", array()), "html", null, true));
                echo "
          ";
            }
            // line 268
            echo "        </div>
        <!-- End Bottom Third Region -->

        <div class = ";
            // line 271
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["bottom_class"]) ? $context["bottom_class"] : null), "html", null, true));
            echo ">
          ";
            // line 272
            if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "bottom_forth", array())) {
                // line 273
                echo "            ";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "bottom_forth", array()), "html", null, true));
                echo "
          ";
            }
            // line 275
            echo "        </div>

      </div>
    </div>
  </div>
";
        }
        // line 281
        echo "<!--End Bottom -->




<!-- start: Footer -->
";
        // line 287
        if ((($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer_first", array()) || $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer_second", array())) || $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer_third", array()))) {
            // line 288
            echo "  <div class=\"footerwidget\">
    <div class=\"container\">
      
      <div class=\"row\">
        
        <!-- Start Footer First Region -->
        <div class = \"col-md-8\">
          ";
            // line 295
            if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer_first", array())) {
                // line 296
                echo "            ";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer_first", array()), "html", null, true));
                echo "
          ";
            }
            // line 298
            echo "        </div>
        <!-- End Footer First Region -->

        <!-- Start Footer Second Region -->
        <div class = \"col-md-4\">
          ";
            // line 303
            if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer_second", array())) {
                // line 304
                echo "            ";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer_second", array()), "html", null, true));
                echo "
          ";
            }
            // line 306
            echo "        </div>
        <!-- End Footer Second Region -->

        <!-- Start Footer third Region -->
        <div class = \"col-md-4\">
          ";
            // line 311
            if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer_third", array())) {
                // line 312
                echo "            ";
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer_third", array()), "html", null, true));
                echo "
          ";
            }
            // line 314
            echo "        </div>
        <!-- End Footer Third Region -->
      </div>
    </div>
  </div>
";
        }
        // line 320
        echo "<!--End Footer -->

<!-- Start Footer Menu -->
";
        // line 323
        if ($this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer_menu", array())) {
            // line 324
            echo "  <div class=\"footer-menu\">
    <div class=\"container\">
      <div class=\"row\">
        <div class=\"col-sm-6 col-md-6\">
          ";
            // line 328
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "footer_menu", array()), "html", null, true));
            echo "
        </div>
      </div>
    </div>
  </div>
";
        }
        // line 334
        echo "<!-- End Footer Menu -->

";
        // line 336
        if (((isset($context["copyright_text"]) ? $context["copyright_text"] : null) || (isset($context["show_credit_link"]) ? $context["show_credit_link"] : null))) {
            // line 337
            echo "<div class=\"copyright\">
  <div class=\"container\">
    <div class=\"row lee-copy\" >

      <!-- Copyright -->
      <!--
      <div class=\"col-sm-6 col-md-6\">
        ";
            // line 344
            if ((isset($context["copyright_text"]) ? $context["copyright_text"] : null)) {
                echo "        
          <p>";
                // line 345
                echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["copyright_text"]) ? $context["copyright_text"] : null), "html", null, true));
                echo "</p>        
        ";
            }
            // line 347
            echo "      </div>
      -->
      <!-- End Copyright -->

      <!-- Credit link -->
      ";
            // line 352
            if ((isset($context["show_credit_link"]) ? $context["show_credit_link"] : null)) {
                // line 353
                echo "        <div class=\"col-sm-12 col-md-12 \">
          <p class=\"credit-link\">
          <div class=\"leespring-copyright\">
            <img src=\"/themes/ko_d8_theme/images/LeeSpring_white_(png).png\" alt=\"LeeSpring\" title=\"Lee Spring Logo\" class=\"footer-img\"><br><br>
              <p class=\"footer-word\">140 58th Street Brooklyn, NY 11220 :<a href=\"tel:888-777-4647\">888-777-4647</a> <a href=\"#\">www.leespring.com</a> Copyright 2013 Lee Spring Company</p><p>
            </p></div>
              <!--<div class=\"img-logo\"><img src=\"/themes/ko_d8_theme/images/LeeSpring_white_(png).png\" alt=\"LeeSpring\"/></div>
            <div class=\"logo-txt\">140 58th Street Brooklyn, NY 11220 t: 888-777-4647 www.leespring.com Copyright 2013 Lee Spring Company</div>-->
          </p>
        </div>
      ";
            }
            // line 364
            echo "      <!-- End Credit link -->
      
    </div>
  </div>
</div>
";
        }
        // line 370
        echo "

<!-- Google map -->
";
        // line 373
        if (((isset($context["is_front"]) ? $context["is_front"] : null) && $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "google_map", array()))) {
            // line 374
            echo "  <div class=\"google_map\">
    ";
            // line 375
            echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["page"]) ? $context["page"] : null), "google_map", array()), "html", null, true));
            echo "
  </div>
";
        }
        // line 378
        echo "<!-- End Google map -->";
    }

    public function getTemplateName()
    {
        return "themes/ko_d8_theme/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  595 => 378,  589 => 375,  586 => 374,  584 => 373,  579 => 370,  571 => 364,  558 => 353,  556 => 352,  549 => 347,  544 => 345,  540 => 344,  531 => 337,  529 => 336,  525 => 334,  516 => 328,  510 => 324,  508 => 323,  503 => 320,  495 => 314,  489 => 312,  487 => 311,  480 => 306,  474 => 304,  472 => 303,  465 => 298,  459 => 296,  457 => 295,  448 => 288,  446 => 287,  438 => 281,  430 => 275,  424 => 273,  422 => 272,  418 => 271,  413 => 268,  407 => 266,  405 => 265,  401 => 264,  395 => 260,  389 => 258,  387 => 257,  383 => 256,  377 => 252,  371 => 250,  369 => 249,  365 => 248,  356 => 241,  354 => 240,  341 => 229,  335 => 226,  332 => 225,  330 => 224,  322 => 218,  315 => 214,  311 => 213,  308 => 212,  306 => 211,  301 => 208,  294 => 204,  290 => 203,  287 => 202,  285 => 201,  280 => 198,  273 => 194,  269 => 193,  266 => 192,  264 => 191,  256 => 186,  250 => 182,  244 => 179,  241 => 178,  239 => 177,  228 => 168,  220 => 163,  214 => 159,  212 => 158,  206 => 154,  197 => 147,  191 => 145,  189 => 144,  185 => 143,  180 => 140,  174 => 138,  172 => 137,  168 => 136,  163 => 133,  157 => 131,  155 => 130,  151 => 129,  143 => 123,  141 => 122,  137 => 121,  131 => 117,  123 => 112,  118 => 109,  116 => 108,  105 => 99,  97 => 94,  90 => 90,  81 => 83,  75 => 82,  73 => 81,  67 => 77,  61 => 75,  59 => 74,  43 => 60,);
    }
}
/* {#*/
/* /***/
/*  * @file*/
/*  * Default theme implementation to display a single page.*/
/*  **/
/*  * The doctype, html, head and body tags are not in this template. Instead they*/
/*  * can be found in the html.html.twig template in this directory.*/
/*  **/
/*  * Available variables:*/
/*  **/
/*  * General utility variables:*/
/*  * - base_path: The base URL path of the Drupal installation. Will usually be*/
/*  *   "/" unless you have installed Drupal in a sub-directory.*/
/*  * - is_front: A flag indicating if the current page is the front page.*/
/*  * - logged_in: A flag indicating if the user is registered and signed in.*/
/*  * - is_admin: A flag indicating if the user has permission to access*/
/*  *   administration pages.*/
/*  **/
/*  * Site identity:*/
/*  * - front_page: The URL of the front page. Use this instead of base_path when*/
/*  *   linking to the front page. This includes the language domain or prefix.*/
/*  * - logo: The url of the logo image, as defined in theme settings.*/
/*  * - site_name: The name of the site. This is empty when displaying the site*/
/*  *   name has been disabled in the theme settings.*/
/*  * - site_slogan: The slogan of the site. This is empty when displaying the site*/
/*  *   slogan has been disabled in theme settings.*/
/*  **/
/*  * Page content (in order of occurrence in the default page.html.twig):*/
/*  * - messages: Status and error messages. Should be displayed prominently.*/
/*  * - node: Fully loaded node, if there is an automatically-loaded node*/
/*  *   associated with the page and the node ID is the second argument in the*/
/*  *   page's path (e.g. node/12345 and node/12345/revisions, but not*/
/*  *   comment/reply/12345).*/
/*  **/
/*  * Regions:*/
/*  * - page.header: Items for the header region.*/
/*  * - page.navigation: Items for the Navigation region.*/
/*  * - page.page_title: Used by Current page Title.*/
/*  * - page.banner: Items for the banner region.*/
/*  * - page.highlighted: Items for the highlighted top  region.*/
/*  * - page.content_top: The main content top of the current page.*/
/*  * - page.help: Item for the help region.*/
/*  * - page.breadcrumb: Item for the Breadcrumb region.*/
/*  * - page.content: The main content of the current page.*/
/*  * - page.sidebar_first: Items for the first sidebar.*/
/*  * - page.sidebar_second: Items for the second sidebar.*/
/*  * - page.content_bottom: Items for the bottom in content region.*/
/*  * - page.footer_top: Items for the footer top region.*/
/*  * - page.footer_first: Items for the footer first region.*/
/*  * - page.footer_second: Items for the footer Second region.*/
/*  * - page.footer_third: Items for the footer third region.*/
/*  * - page.footer_bottom: Items for the footer bottom region.*/
/*  **/
/*  * @see template_preprocess_page()*/
/*  * @see html.html.twig*/
/*  **/
/*  * @ingroup themeable*/
/*  *//* */
/* #}*/
/* */
/* */
/* <!-- Header and Navbar -->*/
/* <header class="main-header">*/
/*   <nav class="navbar navbar-default" role="navigation">*/
/*     <div class="container">*/
/*       <div class="row">*/
/*       <div class="navbar-header col-md-2">*/
/*         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-navigation">*/
/*           <span class="sr-only">Toggle navigation</span>*/
/*           <span class="icon-bar"></span>*/
/*           <span class="icon-bar"></span>*/
/*           <span class="icon-bar"></span>*/
/*         </button>*/
/*         {% if page.header %}*/
/*           {{ page.header }}*/
/*         {% endif %}*/
/*       </div>*/
/* */
/*       <!-- Navigation -->*/
/*       <div class="col-md-10">*/
/*         {% if page.primary_menu %}*/
/*           {{ page.primary_menu }}*/
/*         {% endif %}      */
/*       </div>*/
/*       <!--End Navigation -->*/
/*       </div>*/
/*     </div>*/
/*   </nav>*/
/*   	  <!-- Banner -->*/
/* 	  {% if page.welcome_banner_text %}  */
/* 		<div class="container welcome-banner-text">*/
/* 		  <div class="row">*/
/* 			<div class="col-md-12">*/
/* 				{{ page.welcome_banner_text }}*/
/* 			</div>*/
/* 		  </div>*/
/* 		</div>*/
/* 	  {% endif %}*/
/* 	  <!-- End Banner -->*/
/* */
/*   */
/* */
/* </header>*/
/* <!--End Header & Navbar -->*/
/* */
/* */
/* <!--Highlighted-->*/
/*   {% if page.highlighted %}*/
/*     <div class="container">*/
/*       <div class="row">*/
/*         <div class="col-md-12">*/
/*           {{ page.highlighted }}*/
/*         </div>*/
/*       </div>*/
/*     </div>*/
/*   {% endif %}*/
/* <!--End Highlighted-->*/
/* */
/* */
/* <!-- Start Top Widget -->*/
/* {% if is_front %}  */
/*   {% if page.topwidget_first or page.topwidget_second or page.topwidget_third %}*/
/*     <div class="topwidget">*/
/*       <!-- start: Container -->*/
/*       <div class="container">*/
/*         */
/*         <div class="row">*/
/*           <!-- Top widget first region -->*/
/*           <div class = {{ topwidget_class }}>*/
/*             {% if page.topwidget_first %}*/
/*               {{ page.topwidget_first }}*/
/*             {% endif %}*/
/*           </div>*/
/*           <!-- End top widget third region -->*/
/*           <!-- Top widget second region -->*/
/*           <div class = {{ topwidget_class }}>*/
/*             {% if page.topwidget_second %}*/
/*               {{ page.topwidget_second }}*/
/*             {% endif %}*/
/*           </div>*/
/*           <!-- End top widget third region -->*/
/*           <!-- Top widget third region -->*/
/*           <div class = {{ topwidget_third_class }}>*/
/*             {% if page.topwidget_third %}*/
/*               {{ page.topwidget_third }}*/
/*             {% endif %}*/
/*           </div>*/
/*           <!-- End top widget third region -->*/
/*         </div>*/
/*       </div>*/
/*     </div>*/
/*   {% endif %}*/
/* {% endif %}*/
/* <!--End Top Widget -->*/
/* */
/* */
/* <!-- Page Title -->*/
/* {%  if page.page_title and not is_front %}*/
/*   <div id="page-title">*/
/*     <div id="page-title-inner">*/
/*       <!-- start: Container -->*/
/*       <div class="container">*/
/*         {{ page.page_title }}*/
/*       </div>*/
/*     </div>*/
/*   </div>*/
/* {% endif %}*/
/* <!-- End Page Title ---- >*/
/* */
/* */
/* <!-- layout -->*/
/* <div id="wrapper">*/
/*   <!-- start: Container -->*/
/*   <div class="container">*/
/*     */
/*     <!--Content top-->*/
/*       {% if page.content_top %}*/
/*         <div class="row">*/
/*           {{ page.content_top }}*/
/*         </div>*/
/*       {% endif %}*/
/*     <!--End Content top-->*/
/*     */
/*     <!--start:content -->*/
/*     <div class="row">*/
/*       <div class="col-md-12">{{ page.breadcrumb }}</div>*/
/*     </div>*/
/* */
/*     <div class="row layout">*/
/*       <!--- Start Left SideBar -->*/
/*       {% if page.sidebar_first %}*/
/*         <div class="sidebar" >*/
/*           <div class = {{sidebarfirst}} >*/
/*             {{ page.sidebar_first }}*/
/*           </div>*/
/*         </div>*/
/*       {% endif %}*/
/*       <!---End Right SideBar -->*/
/* */
/*       <!--- Start content -->*/
/*       {% if page.content %}*/
/*         <div class="content_layout">*/
/*           <div class={{contentlayout}}>*/
/*             {{ page.content }}*/
/*           </div>*/
/*         </div>*/
/*       {% endif %}*/
/*       <!---End content -->*/
/* */
/*       <!--- Start Right SideBar -->*/
/*       {% if page.sidebar_second %}*/
/*         <div class="sidebar">*/
/*           <div class={{sidebarsecond}}>*/
/*             {{ page.sidebar_second }}*/
/*           </div>*/
/*         </div>*/
/*       {% endif %}*/
/*       <!---End Right SideBar -->*/
/*       */
/*     </div>*/
/*     <!--End Content -->*/
/* */
/*     <!--Start Content Bottom-->*/
/*     {% if page.content_bottom %}*/
/*       <div class="row">*/
/*         {{ page.content_bottom }}*/
/*       </div>*/
/*     {% endif %}*/
/*     <!--End Content Bottom-->*/
/*   </div>*/
/* </div>*/
/* <!-- End layout -->*/
/* */
/* */
/* */
/* */
/* */
/* */
/* <!-- Start bottom --> */
/* {% if page.bottom_first or page.bottom_second or page.bottom_third or page.bottom_forth %}*/
/*   <div class="bottom-widgets">*/
/*     <!-- Start Container -->*/
/*     <div class="container">*/
/*       */
/*       <div class="row">*/
/* */
/*         <!-- Start Bottom First Region -->*/
/*         <div class = {{ bottom_class }}>*/
/*           {% if page.bottom_first %}*/
/*             {{ page.bottom_first }}*/
/*           {% endif %}*/
/*         </div>*/
/*         <!-- End Bottom First Region -->*/
/* */
/*         <!-- Start Bottom Second Region -->*/
/*         <div class = {{ bottom_class }}>*/
/*           {% if page.bottom_second %}*/
/*             {{ page.bottom_second }}*/
/*           {% endif %}*/
/*         </div>*/
/*         <!-- End Bottom Second Region -->*/
/* */
/*         <!-- Start Bottom third Region -->*/
/*         <div class = {{ bottom_class }}>*/
/*           {% if page.bottom_third %}*/
/*             {{ page.bottom_third }}*/
/*           {% endif %}*/
/*         </div>*/
/*         <!-- End Bottom Third Region -->*/
/* */
/*         <div class = {{ bottom_class }}>*/
/*           {% if page.bottom_forth %}*/
/*             {{ page.bottom_forth }}*/
/*           {% endif %}*/
/*         </div>*/
/* */
/*       </div>*/
/*     </div>*/
/*   </div>*/
/* {% endif %}*/
/* <!--End Bottom -->*/
/* */
/* */
/* */
/* */
/* <!-- start: Footer -->*/
/* {% if  (page.footer_first or page.footer_second or page.footer_third) %}*/
/*   <div class="footerwidget">*/
/*     <div class="container">*/
/*       */
/*       <div class="row">*/
/*         */
/*         <!-- Start Footer First Region -->*/
/*         <div class = "col-md-8">*/
/*           {% if page.footer_first %}*/
/*             {{ page.footer_first }}*/
/*           {% endif %}*/
/*         </div>*/
/*         <!-- End Footer First Region -->*/
/* */
/*         <!-- Start Footer Second Region -->*/
/*         <div class = "col-md-4">*/
/*           {% if page.footer_second %}*/
/*             {{ page.footer_second }}*/
/*           {% endif %}*/
/*         </div>*/
/*         <!-- End Footer Second Region -->*/
/* */
/*         <!-- Start Footer third Region -->*/
/*         <div class = "col-md-4">*/
/*           {% if page.footer_third %}*/
/*             {{ page.footer_third }}*/
/*           {% endif %}*/
/*         </div>*/
/*         <!-- End Footer Third Region -->*/
/*       </div>*/
/*     </div>*/
/*   </div>*/
/* {% endif %}*/
/* <!--End Footer -->*/
/* */
/* <!-- Start Footer Menu -->*/
/* {% if page.footer_menu %}*/
/*   <div class="footer-menu">*/
/*     <div class="container">*/
/*       <div class="row">*/
/*         <div class="col-sm-6 col-md-6">*/
/*           {{ page.footer_menu }}*/
/*         </div>*/
/*       </div>*/
/*     </div>*/
/*   </div>*/
/* {% endif %}*/
/* <!-- End Footer Menu -->*/
/* */
/* {% if copyright_text or show_credit_link %}*/
/* <div class="copyright">*/
/*   <div class="container">*/
/*     <div class="row lee-copy" >*/
/* */
/*       <!-- Copyright -->*/
/*       <!--*/
/*       <div class="col-sm-6 col-md-6">*/
/*         {% if copyright_text %}        */
/*           <p>{{copyright_text}}</p>        */
/*         {% endif %}*/
/*       </div>*/
/*       -->*/
/*       <!-- End Copyright -->*/
/* */
/*       <!-- Credit link -->*/
/*       {% if show_credit_link %}*/
/*         <div class="col-sm-12 col-md-12 ">*/
/*           <p class="credit-link">*/
/*           <div class="leespring-copyright">*/
/*             <img src="/themes/ko_d8_theme/images/LeeSpring_white_(png).png" alt="LeeSpring" title="Lee Spring Logo" class="footer-img"><br><br>*/
/*               <p class="footer-word">140 58th Street Brooklyn, NY 11220 :<a href="tel:888-777-4647">888-777-4647</a> <a href="#">www.leespring.com</a> Copyright 2013 Lee Spring Company</p><p>*/
/*             </p></div>*/
/*               <!--<div class="img-logo"><img src="/themes/ko_d8_theme/images/LeeSpring_white_(png).png" alt="LeeSpring"/></div>*/
/*             <div class="logo-txt">140 58th Street Brooklyn, NY 11220 t: 888-777-4647 www.leespring.com Copyright 2013 Lee Spring Company</div>-->*/
/*           </p>*/
/*         </div>*/
/*       {% endif %}*/
/*       <!-- End Credit link -->*/
/*       */
/*     </div>*/
/*   </div>*/
/* </div>*/
/* {% endif %}*/
/* */
/* */
/* <!-- Google map -->*/
/* {% if is_front and page.google_map %}*/
/*   <div class="google_map">*/
/*     {{ page.google_map }}*/
/*   </div>*/
/* {% endif %}*/
/* <!-- End Google map -->*/
