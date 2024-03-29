/* API file for Vercel */

module.exports = (req, res) => {
    var Twig = require('twig'),
        twigDrupal = require('twig-drupal-filters'),
        express = require('express'),
        app = express(),
        path = require('path');

    twigDrupal(Twig);

    // -----------------------------------------------------------------
    // Custom filters

    Twig.extendFilter('price_one_line', function (value) {
        return value;
    });

    Twig.extendFilter('json_parse', function (value) {
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    });

    // -----------------------------------------------------------------
    // Render

    app.set('twig options', {
        allow_async: false, // Allow asynchronous compiling
        strict_variables: false,
        allowInlineIncludes: true,
        rethrow: true,
        namespaces: {
            // 'bf-lib'        :'projects/front-end-library/src/lib',
            'bf-components': 'projects/front-end-library/src/lib/components',
            'bf-sections': 'projects/front-end-library/src/lib/sections',
            'bf-utils': 'projects/front-end-library/src/lib/utils',
            // 'bf-pipes'      :'projects/front-end-library/src/lib/pipes'
        },
    });

    app.set('views', path.join(__dirname, '../projects/front-end-library/src/lib'));
    app.set('view engine', 'twig');

    app.render('main.twig', req.query, function (err, html) {
        console.log(err ? err : html);
        res.status(200).send(html);
    });
};
