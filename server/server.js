// var Twig = require("twig"),
//     express = require('express'),
//     app = express();

// const port = 3001;

// // This section is optional and used to configure twig.
// app.set("twig options", {
//     allow_async: true, // Allow asynchronous compiling
//     strict_variables: false
// });

// app.set('views', __dirname + '/views');
// app.set('view engine', 'twig');

// app.get('/', function(req, res){
//     // console.log(req.params, req);
//     // Object.assign(req.params, req.query);
//     res.render('index.twig', req.query);
// });

// Twig.extendFilter('boolean', function(value, params) {
//     // console.log('value', value, params);
//     return (value === 0 || value === '0' || value === 'false') ? false : !!value;
// });

// app.listen(port, () => {
//     console.log('Node.js Express server listening on port '+port);
// });

  const app = require('express')();
//   const port = process.env.NODE_PORT || 3001;
  const port = 3001;
  const {TwingEnvironment, TwingLoaderFilesystem} = require('twing');
  let loader = new TwingLoaderFilesystem('./projects/front-end-library/src/lib/components');
  let twing = new TwingEnvironment(loader);

  app.get('/api/twig', function (req, res) {
    Object.assign(req.params, req.query);
    twing.render('main.twig', req.params).then((output) => {
        res.end(output);
    });
  });

  app.listen(port, () => {
    console.log('Node.js Express server listening on port '+port);
  });

