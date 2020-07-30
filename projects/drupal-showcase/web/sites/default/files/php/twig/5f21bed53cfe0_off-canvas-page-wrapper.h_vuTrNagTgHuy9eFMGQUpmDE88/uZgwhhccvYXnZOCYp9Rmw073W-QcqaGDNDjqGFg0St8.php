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

/* core/modules/system/templates/off-canvas-page-wrapper.html.twig */
class __TwigTemplate_75d1202f495c45e7156220ea445c451d586cf4d9f0ff356283505610a3bfb8df extends \Twig\Template
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
        $tags = array("if" => 22);
        $filters = array("escape" => 24);
        $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
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
        // line 22
        if (($context["children"] ?? null)) {
            // line 23
            echo "  <div class=\"dialog-off-canvas-main-canvas\" data-off-canvas-main-canvas>
    ";
            // line 24
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["children"] ?? null), 24, $this->source), "html", null, true);
            echo "
  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "core/modules/system/templates/off-canvas-page-wrapper.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  67 => 24,  64 => 23,  62 => 22,);
    }

    public function getSourceContext()
    {
        return new Source("", "core/modules/system/templates/off-canvas-page-wrapper.html.twig", "/Users/baptiste/Workspace/Projects/Videotron/GIT/bifrost-front-end-library/projects/drupal-showcase/web/core/modules/system/templates/off-canvas-page-wrapper.html.twig");
    }
}
