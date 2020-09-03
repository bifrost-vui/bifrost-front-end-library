module.exports = (req, res) => {
var Twig = require("twig"),
    express = require('express'),
    app = express(),
    path = require('path');

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

    app.set('views', path.join(__dirname, '../projects/front-end-library/src/lib'));
    // app.set('views', '/api');
    app.set('view engine', 'twig');
    // app.engine('html', require('ejs').renderFile);

    // app.render('main.twig');
    app.render('main.twig', req.query, function(err, html){ 
        console.log((err) ? err : html);
        res.status(200).send(html);
    });
    // app.sendFile('main.twig');

    // twig.render(path.join(__dirname, 'main.html'), req.query, function(err, html) {
    //     res.status(200).send(html);
    // });

    // Twig.renderFile('main.twig', req.query).then((output) => {
    //     res.status(200).send(output);
    // });
    // res.status(200).send('main.twig');

    // app.get('/', function (req, res) {
    // res.send('Admin Homepage')
    // })

    // res.send('main.html', req.query);
    // app.get('/', function(req, res){
    //     // console.log(req.params, req);
    //     // Object.assign(req.params, req.query);
    //     res.render('main.html', req.query);
    // });

    // Twig.extendFilter('boolean', function(value, params) {
    //     // console.log('value', value, params);
    //     return (value === 0 || value === '0' || value === 'false') ? false : !!value;
    // });
}