module.exports = (req, res) => {
    const {TwingEnvironment, TwingLoaderFilesystem} = require('twing');
    let loader = new TwingLoaderFilesystem('../projects/front-end-library/src/utils/');
    let twing = new TwingEnvironment(loader);

    // const { name = 'World' } = req.query
    // res.status(200).send(`Yo ${name}!`)
    twing.render('main.twig', req.query).then((output) => {
        res.end(output);
    });
}