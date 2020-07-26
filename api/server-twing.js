/*
 * Disclaimer:
 * This file is obsolete since we don't use twing anymore. We use Twig.js instead.
 */

  const app = require('express')();
  // const port = process.env.NODE_PORT || 3001;
  const port = 3001;
  const {TwingEnvironment, TwingLoaderFilesystem} = require('twing');
  let loader = new TwingLoaderFilesystem('./projects/front-end-library/src/lib');
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

