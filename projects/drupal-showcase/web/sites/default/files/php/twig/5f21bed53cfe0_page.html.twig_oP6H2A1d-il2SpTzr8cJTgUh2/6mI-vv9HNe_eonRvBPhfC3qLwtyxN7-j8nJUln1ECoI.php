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

/* themes/bifrost/templates/page.html.twig */
class __TwigTemplate_18365a00d9278e9ff017090c3b7ef11ca11accc5f7713bb5e4ac80fce9cef15e extends \Twig\Template
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
        $tags = array("include" => 45, "if" => 64);
        $filters = array("escape" => 59);
        $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['include', 'if'],
                ['escape'],
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
        // line 42
        echo "    
    ";
        // line 44
        echo "
    ";
        // line 45
        $this->loadTemplate("@components/button/twig/button.twig", "themes/bifrost/templates/page.html.twig", 45)->display(twig_to_array(["label" => "New label"]));
        // line 48
        echo "
    ";
        // line 49
        $this->loadTemplate("@templates/contact-form/twig/contact-form.twig", "themes/bifrost/templates/page.html.twig", 49)->display(twig_to_array(["label" => "Contact form", "submitButton" => ["label" => "Nested button"]]));
        // line 55
        echo "
    <br/><br/><br/>

    <div class=\"layout-container\">
        ";
        // line 59
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pre_content", [], "any", false, false, true, 59), 59, $this->source), "html", null, true);
        echo "
        ";
        // line 60
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 60), 60, $this->source), "html", null, true);
        echo "
        <main class=\"page-content clearfix\" role=\"main\">
            <div class=\"visually-hidden\"><a id=\"main-content\" tabindex=\"-1\"></a></div>
            ";
        // line 63
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 63), 63, $this->source), "html", null, true);
        echo "
            ";
        // line 64
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 64)) {
            // line 65
            echo "                <div class=\"help\">
                    ";
            // line 66
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 66), 66, $this->source), "html", null, true);
            echo "
                </div>
            ";
        }
        // line 69
        echo "            ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 69), 69, $this->source), "html", null, true);
        echo "
        </main>

    </div>
";
    }

    public function getTemplateName()
    {
        return "themes/bifrost/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  106 => 69,  100 => 66,  97 => 65,  95 => 64,  91 => 63,  85 => 60,  81 => 59,  75 => 55,  73 => 49,  70 => 48,  68 => 45,  65 => 44,  62 => 42,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/bifrost/templates/page.html.twig", "/Users/baptiste/Workspace/Projects/Videotron/GIT/bifrost-front-end-library/projects/drupal-showcase/web/themes/bifrost/templates/page.html.twig");
    }
}
