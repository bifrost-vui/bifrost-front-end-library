module.exports = (req, res) => {
    const app = require('express')();
    const path = require('path');
    const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

    let loader = new TwingLoaderFilesystem(path.join(__dirname, '../projects/front-end-library/src/utils/'));
    let twing = new TwingEnvironment(loader);

    Object.assign(req.params, req.query, { component: 'button' });
    twing.render('main.twig', req.params).then((output) => {
        res.end(output);
    });
}