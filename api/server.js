var Twig = require("twig"),
    express = require('express'),
    app = express(),
    path = require('path');

const port = 3001;


// -----------------------------------------------------------------
// Expose Assets. Especially style.min.css

app.use('/public', express.static('public'));


// -----------------------------------------------------------------
// Expose Twig files

app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false,
    namespaces: {
        'components': 'projects/front-end-library/src/lib/components',
        'organisms': 'projects/front-end-library/src/lib/organisms',
        'templates': 'projects/front-end-library/src/lib/templates',
        'pipes': 'projects/front-end-library/src/lib/pipes'
    }
});

app.set('views', 'projects/front-end-library/src/lib');
app.set('view engine', 'twig');

app.get('/api/twig', function(req, res){
    // console.log(req.params, req);
    // Object.assign(req.params, req.query);
    res.render('main.twig', req.query);
});

Twig.extendFilter('boolean', function(value, params) {
    // console.log('value', value, params);
    return (value === 0 || value === '0' || value === 'false') ? false : !!value;
});


// -----------------------------------------------------------------
// Listen

app.listen(port, () => {
    console.log('Node.js Express server listening on port '+port);
});