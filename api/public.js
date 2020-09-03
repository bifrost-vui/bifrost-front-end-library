module.exports = (req, res) => {
    var express = require('express'),
        app = express(),
        path = require('path');

    // app.use(express.static(__dirname + "./../public/styles/"));

    // const { name = 'World' } = req.query
    // // res.status(200).sendFile(__dirname + "./../public/styles/style.css")
    
    app.set('views', path.join(__dirname, '../public/styles/'));
    app.engine('html', require('ejs').renderFile);

    app.render('style.html', req.query, function(err, html){ 
        console.log((err) ? err : html);
        res.status(200).send(html);
    });

    // app.set('views', path.join(__dirname, '../public/styles/'));
    //     app.render('/', function(req, res) {
    //     res.sendFile(__dirname + "./../public/styles/style.css")
    // });

    // app.get('/', function(req, res) {
    //     res.sendFile(__dirname + "/public/styles/" + "style.css");
    // });

    // app.render('style.css', req.query, function(err, output){ 
    //     console.log((err) ? err : output);
    //     res.status(200).send(output);
    // });
}