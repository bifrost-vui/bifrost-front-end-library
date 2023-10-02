/* Local API file */

var Twig = require('twig'),
    twigDrupal = require('twig-drupal-filters'),
    express = require('express'),
    app = express(),
    path = require('path');
minify = require('html-minifier-terser').minify;

twigDrupal(Twig);

const port = 3001;

// -----------------------------------------------------------------
// Expose Assets. Especially style.min.css

app.use('/', express.static('public'));

// -----------------------------------------------------------------
// Expose Twig files

app.set('twig options', {
    allow_async: false, // Allow asynchronous compiling
    strict_variables: false,
    allowInlineIncludes: true,
    rethrow: true,
    namespaces: {
        'bf-components': path.resolve(__dirname, '../projects/front-end-library/src/lib/components'),
        'bf-sections': path.resolve(__dirname, '../projects/front-end-library/src/lib/sections'),
        'bf-utils': path.resolve(__dirname, '../projects/front-end-library/src/lib/utils'),
    },
});

app.set('views', 'projects/front-end-library/src/lib');
app.set('view engine', 'twig');

app.get('/api/twig', function (req, res) {
    // console.log(req.params, req);
    // Object.assign(req.params, req.query);

    res.render('main.twig', req.query, async function (err, html) {
        const result = await minify(html, {
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
        });
        res.send(result);
    });
});

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
// Listen

app.listen(port, () => {
    console.log('Node.js Express server listening on port ' + port);
});
