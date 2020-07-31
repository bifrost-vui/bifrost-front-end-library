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
        $tags = array("include" => 43, "if" => 62);
        $filters = array("escape" => 57);
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
        // line 43
        $this->loadTemplate("@components/button/twig/button.twig", "themes/bifrost/templates/page.html.twig", 43)->display(twig_to_array(["label" => "New label"]));
        // line 46
        echo "
    ";
        // line 47
        $this->loadTemplate("@templates/contact-form/twig/contact-form.twig", "themes/bifrost/templates/page.html.twig", 47)->display(twig_to_array(["label" => "Contact form", "submitButton" => ["label" => "Nested button"]]));
        // line 53
        echo "
    <br/><br/><br/>

    <div class=\"layout-container\">
        ";
        // line 57
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pre_content", [], "any", false, false, true, 57), 57, $this->source), "html", null, true);
        echo "
        ";
        // line 58
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 58), 58, $this->source), "html", null, true);
        echo "
        <main class=\"page-content clearfix\" role=\"main\">
            <div class=\"visually-hidden\"><a id=\"main-content\" tabindex=\"-1\"></a></div>
            ";
        // line 61
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 61), 61, $this->source), "html", null, true);
        echo "
            ";
        // line 62
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 62)) {
            // line 63
            echo "                <div class=\"help\">
                    ";
            // line 64
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 64), 64, $this->source), "html", null, true);
            echo "
                </div>
            ";
        }
        // line 67
        echo "            ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 67), 67, $this->source), "html", null, true);
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
        return array (  103 => 67,  97 => 64,  94 => 63,  92 => 62,  88 => 61,  82 => 58,  78 => 57,  72 => 53,  70 => 47,  67 => 46,  65 => 43,  62 => 42,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/bifrost/templates/page.html.twig", "/Users/baptiste/Workspace/Projects/Videotron/GIT/bifrost-front-end-library/projects/drupal-showcase/web/themes/bifrost/templates/page.html.twig");
    }
}
