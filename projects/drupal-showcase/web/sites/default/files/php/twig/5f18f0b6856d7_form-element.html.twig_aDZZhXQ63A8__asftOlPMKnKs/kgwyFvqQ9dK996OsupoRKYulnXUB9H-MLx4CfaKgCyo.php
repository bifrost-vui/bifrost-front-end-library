<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* core/themes/seven/templates/classy/form/form-element.html.twig */
class __TwigTemplate_f66015567a0117e107c99d6a9a5801a3ae401f850c2cecdce255fa6f97777121 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = array("set" => 48, "if" => 67);
        $filters = array("clean_class" => 51, "escape" => 66);
        $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 48
        $context["classes"] = [0 => "js-form-item", 1 => "form-item", 2 => ("js-form-type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 51
($context["type"] ?? null), 51, $this->source))), 3 => ("form-type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 52
($context["type"] ?? null), 52, $this->source))), 4 => ("js-form-item-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 53
($context["name"] ?? null), 53, $this->source))), 5 => ("form-item-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 54
($context["name"] ?? null), 54, $this->source))), 6 => ((!twig_in_filter(        // line 55
($context["title_display"] ?? null), [0 => "after", 1 => "before"])) ? ("form-no-label") : ("")), 7 => (((        // line 56
($context["disabled"] ?? null) == "disabled")) ? ("form-disabled") : ("")), 8 => ((        // line 57
($context["errors"] ?? null)) ? ("form-item--error") : (""))];
        // line 61
        $context["description_classes"] = [0 => "description", 1 => (((        // line 63
($context["description_display"] ?? null) == "invisible")) ? ("visually-hidden") : (""))];
        // line 66
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 66), 66, $this->source), "html", null, true);
        echo ">
  ";
        // line 67
        if (twig_in_filter(($context["label_display"] ?? null), [0 => "before", 1 => "invisible"])) {
            // line 68
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 68, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 70
        echo "  ";
        if ( !twig_test_empty(($context["prefix"] ?? null))) {
            // line 71
            echo "    <span class=\"field-prefix\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["prefix"] ?? null), 71, $this->source), "html", null, true);
            echo "</span>
  ";
        }
        // line 73
        echo "  ";
        if (((($context["description_display"] ?? null) == "before") && twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 73))) {
            // line 74
            echo "    <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "attributes", [], "any", false, false, true, 74), 74, $this->source), "html", null, true);
            echo ">
      ";
            // line 75
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 75), 75, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 78
        echo "  ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["children"] ?? null), 78, $this->source), "html", null, true);
        echo "
  ";
        // line 79
        if ( !twig_test_empty(($context["suffix"] ?? null))) {
            // line 80
            echo "    <span class=\"field-suffix\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["suffix"] ?? null), 80, $this->source), "html", null, true);
            echo "</span>
  ";
        }
        // line 82
        echo "  ";
        if ((($context["label_display"] ?? null) == "after")) {
            // line 83
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 83, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 85
        echo "  ";
        if (($context["errors"] ?? null)) {
            // line 86
            echo "    <div class=\"form-item--error-message\">
      <strong>";
            // line 87
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["errors"] ?? null), 87, $this->source), "html", null, true);
            echo "</strong>
    </div>
  ";
        }
        // line 90
        echo "  ";
        if ((twig_in_filter(($context["description_display"] ?? null), [0 => "after", 1 => "invisible"]) && twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 90))) {
            // line 91
            echo "    <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "attributes", [], "any", false, false, true, 91), "addClass", [0 => ($context["description_classes"] ?? null)], "method", false, false, true, 91), 91, $this->source), "html", null, true);
            echo ">
      ";
            // line 92
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 92), 92, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 95
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "core/themes/seven/templates/classy/form/form-element.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  158 => 95,  152 => 92,  147 => 91,  144 => 90,  138 => 87,  135 => 86,  132 => 85,  126 => 83,  123 => 82,  117 => 80,  115 => 79,  110 => 78,  104 => 75,  99 => 74,  96 => 73,  90 => 71,  87 => 70,  81 => 68,  79 => 67,  74 => 66,  72 => 63,  71 => 61,  69 => 57,  68 => 56,  67 => 55,  66 => 54,  65 => 53,  64 => 52,  63 => 51,  62 => 48,);
    }

    public function getSourceContext()
    {
        return new Source("", "core/themes/seven/templates/classy/form/form-element.html.twig", "/Users/baptiste/Workspace/Projects/Videotron/GIT/bifrost-front-end-library/projects/drupal-showcase/web/core/themes/seven/templates/classy/form/form-element.html.twig");
    }
}
