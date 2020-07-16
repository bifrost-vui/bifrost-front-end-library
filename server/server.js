  const app = require('express')();
//   const port = process.env.NODE_PORT || 3001;
  const port = 3001;
  const {TwingEnvironment, TwingLoaderFilesystem} = require('twing');
  let loader = new TwingLoaderFilesystem('./projects/front-end-library/src/lib/components/');
  let twing = new TwingEnvironment(loader);

  app.get('/:component', function (req, res) {
    Object.assign(req.params, req.query);
    twing.render('main.twig', req.params).then((output) => {
        res.end(output);
    });
  });

  app.listen(port, () => {
    console.log('Node.js Express server listening on port '+port);
  });