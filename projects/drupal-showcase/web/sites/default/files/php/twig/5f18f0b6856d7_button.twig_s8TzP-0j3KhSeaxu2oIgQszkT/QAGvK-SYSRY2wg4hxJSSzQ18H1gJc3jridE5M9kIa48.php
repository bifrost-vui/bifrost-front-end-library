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

/* themes/bifrost/node_modules/bifrost-front-end-library/source/components/button/twig/button.twig */
class __TwigTemplate_1cd9d1903244db6831cb78a83b98b277c8544e6b72d916d2124b1ffd596ef99b extends \Twig\Template
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
        $tags = array("if" => 10);
        $filters = array("escape" => 5, "default" => 5);
        $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape', 'default'],
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
        // line 1
        echo "<button 
    type=\"button\"
    class=\"
        btn
        btn-";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (((isset($context["size"]) || array_key_exists("size", $context))) ? (_twig_default_filter($this->sandbox->ensureToStringAllowed(($context["size"] ?? null), 5, $this->source), "md")) : ("md")), "html", null, true);
        echo " 
        btn-";
        // line 6
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (((isset($context["color"]) || array_key_exists("color", $context))) ? (_twig_default_filter($this->sandbox->ensureToStringAllowed(($context["color"] ?? null), 6, $this->source), "primary")) : ("primary")), "html", null, true);
        echo " 
        ";
        // line 7
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (((isset($context["class"]) || array_key_exists("class", $context))) ? (_twig_default_filter($this->sandbox->ensureToStringAllowed(($context["class"] ?? null), 7, $this->source), "")) : ("")), "html", null, true);
        echo "
    \" 
    
    ";
        // line 10
        if ((($context["disabled"] ?? null) === true)) {
            echo "disabled=\"disabled\"";
        }
        // line 11
        echo ">
    ";
        // line 12
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["disabled"] ?? null), 12, $this->source), "html", null, true);
        echo "
    ";
        // line 13
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (((isset($context["label"]) || array_key_exists("label", $context))) ? (_twig_default_filter($this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 13, $this->source), "Default")) : ("Default")), "html", null, true);
        echo "
</button>
";
    }

    public function getTemplateName()
    {
        return "themes/bifrost/node_modules/bifrost-front-end-library/source/components/button/twig/button.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  93 => 13,  89 => 12,  86 => 11,  82 => 10,  76 => 7,  72 => 6,  68 => 5,  62 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/bifrost/node_modules/bifrost-front-end-library/source/components/button/twig/button.twig", "/Users/baptiste/Workspace/Projects/Videotron/GIT/bifrost-front-end-library/projects/drupal-showcase/web/themes/bifrost/node_modules/bifrost-front-end-library/source/components/button/twig/button.twig");
    }
}
