<?php

/* {# inline_template_start #}<div class="views-field views-field-body"><h1 class="views-label views-label-body">Battery Spring
</h1><div class="field-content"></div></div> */
class __TwigTemplate_5a5b2261665a5c41495f63dd3479bbbce228d53a09487da7821f09797ea220ae extends Twig_Template
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
        $tags = array();
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array(),
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

        // line 1
        echo "<div class=\"views-field views-field-body\"><h1 class=\"views-label views-label-body\">Battery Spring
</h1><div class=\"field-content\"></div></div>";
    }

    public function getTemplateName()
    {
        return "{# inline_template_start #}<div class=\"views-field views-field-body\"><h1 class=\"views-label views-label-body\">Battery Spring
</h1><div class=\"field-content\"></div></div>";
    }

    public function getDebugInfo()
    {
        return array (  44 => 1,);
    }
}
/* {# inline_template_start #}<div class="views-field views-field-body"><h1 class="views-label views-label-body">Battery Spring*/
/* </h1><div class="field-content"></div></div>*/
