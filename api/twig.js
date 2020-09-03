module.exports = (req, res) => {
var Twig = require("twig"),
    express = require('express'),
    app = express(),
    path = require('path');

    app.set("twig options", {
        allow_async: true, // Allow asynchronous compiling
        strict_variables: false,
        namespaces: {
            'components':   'projects/front-end-library/src/lib/components',
            'organisms':    'projects/front-end-library/src/lib/organisms',
            'templates':    'projects/front-end-library/src/lib/templates',
            'pipes':        'projects/front-end-library/src/lib/pipes'
        }
    });

    app.set('views', path.join(__dirname, '../projects/front-end-library/src/lib'));
    app.set('view engine', 'twig');

    app.render('main.twig', req.query, function(err, html){ 
        console.log((err) ? err : html);
        res.status(200).send(html);
    });

    Twig.extendFilter('boolean', function(value, params) {
        // console.log('value', value, params);
        return (value === 0 || value === '0' || value === 'false') ? false : !!value;
    });
}