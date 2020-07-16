module.exports = (req, res) => {
    const app = require('express')();
    const path = require('path');
    const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

    // let loader = new TwingLoaderFilesystem(path.join(__dirname, '../projects/front-end-library/src/utils/'));
    let loader = new TwingLoaderFilesystem(path.join(__dirname, '../projects/front-end-library/src/lib/components'));
    let twing = new TwingEnvironment(loader);

    console.log(req);

    // Object.assign(req.params, req.query, { component: 'button' });
    twing.render('main.twig', req.query).then((output) => {
        res.status(200).send(output);
    });
}