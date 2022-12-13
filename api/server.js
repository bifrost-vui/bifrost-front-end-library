var Twig = require("twig"),
    express = require('express'),
    app = express(),
    path = require('path');
    minify = require('html-minifier-terser').minify;

const port = 3001;


// -----------------------------------------------------------------
// Expose Assets. Especially style.min.css

app.use('/', express.static('public'));


// -----------------------------------------------------------------
// Expose Twig files

app.set("twig options", {
    allow_async: false, // Allow asynchronous compiling
    strict_variables: false,
    allowInlineIncludes: true,
    rethrow: true,
    namespaces: {
        'bf-components' : path.resolve(__dirname, '../projects/front-end-library/src/lib/components'),
        'bf-sections'   : path.resolve(__dirname, '../projects/front-end-library/src/lib/sections'),
        'bf-utils'      : path.resolve(__dirname, '../projects/front-end-library/src/lib/utils'),
    }
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
// Filters

Twig.extendFilter('clean_class', function(value) {
    return value;
});

Twig.extendFilter('clean_id', function(value) {
    return value;
});

Twig.extendFilter('format_date', function(value) {
    return value;
});

Twig.extendFilter('placeholder', function(value) {
    return value;
});

Twig.extendFilter('price_one_line', function(value) {
    return value;
});

Twig.extendFilter('render', function(value) {
    return value;
});

Twig.extendFilter('safe_join', function(value) {
    return value;
});

Twig.extendFilter('t', function(value) {
    return value;
});

// -----------------------------------------------------------------
// Custom filters

Twig.extendFilter('json_parse', function(value) {
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
});


// -----------------------------------------------------------------
// Listen

app.listen(port, () => {
    console.log('Node.js Express server listening on port '+port);
});
