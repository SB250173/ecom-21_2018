<?php

/* {# inline_template_start #}<div class="part-info" id="part-{{ nid }}" data-nid="{{ nid }}">{{ field_field_max_load}}</div> */
class __TwigTemplate_bedd7beefe647fa3fb4c1168088316d70637e523098b7414d3f0b4427629c24e extends Twig_Template
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
        echo "<div class=\"part-info\" id=\"part-";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["nid"]) ? $context["nid"] : null), "html", null, true));
        echo "\" data-nid=\"";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["nid"]) ? $context["nid"] : null), "html", null, true));
        echo "\">";
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["field_field_max_load"]) ? $context["field_field_max_load"] : null), "html", null, true));
        echo "</div>";
    }

    public function getTemplateName()
    {
        return "{# inline_template_start #}<div class=\"part-info\" id=\"part-{{ nid }}\" data-nid=\"{{ nid }}\">{{ field_field_max_load}}</div>";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  43 => 1,);
    }
}
/* {# inline_template_start #}<div class="part-info" id="part-{{ nid }}" data-nid="{{ nid }}">{{ field_field_max_load}}</div>*/
