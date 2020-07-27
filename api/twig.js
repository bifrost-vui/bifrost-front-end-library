module.exports = (req, res) => {
    var Twig = require("twig"),
        express = require('express'),
        app = express();

    // const port = 3001;

    // This section is optional and used to configure twig.
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

    app.set('views', 'projects/front-end-library/src/lib');
    app.set('view engine', 'twig');

    app.render('main.twig', req.query, function(err, html){ 
        return console.log((err) ? err : html);
    });

    // app.get('/', function(req, res){
    //     // console.log(req.params, req);
    //     // Object.assign(req.params, req.query);
    //     res.render('main.twig', req.query);
    // });

    // Twig.extendFilter('boolean', function(value, params) {
    //     // console.log('value', value, params);
    //     return (value === 0 || value === '0' || value === 'false') ? false : !!value;
    // });
}