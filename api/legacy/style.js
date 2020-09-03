module.exports = (req, res) => {
    var Twig = require("twig"),
        express = require('express'),
        app = express();
    
    const path = require('path');
    
    app.render(
        path.join(__dirname, '../projects/front-end-library/src/lib/styles/dist/style.min.css')),
        req.query, 
        function(err, html) {
            return html;
        }
    );

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