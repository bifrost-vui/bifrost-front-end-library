module.exports = (req, res) => {
    
    console.log(req, res);

    const app = require('express')();
    const path = require('path');
    //   const port = process.env.NODE_PORT || 3001;
    const port = 3001;
    const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');
    let loader = new TwingLoaderFilesystem(path.join(__dirname, '../projects/front-end-library/src/utils/'));
    let twing = new TwingEnvironment(loader);

    // const { name = 'World' } = req.query
    // res.status(200).send(`Yo ${name}!`)
    twing.render('main.twig', req.query).then((output) => {
        res.end(output);
    });
}