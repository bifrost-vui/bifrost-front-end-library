module.exports = (req, res) => {
    const express = require('express'),
    app = express();


    // app.use(express.static('public'));

    const { name = 'World' } = req.query
    res.status(200).send(`Hello ${name}!`)
}