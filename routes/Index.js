const express = require('express');
const router = express.Router()
/* define a simple route */
router.get('/', (req, res) => {
    res.json({ "message": "Welcome to Node CRUD API application by Gaurav Lambha!!" });
});

/*  This route render json data */
router.get('/json', (req, res) => {
    res.json({
        confirmation: 'success',
        app: process.env.APP_ID,
        data: 'this is a sample json route!!'
    })
})

/*  This route sends text back as plain text. */
router.get('/send', (req, res) => {
    res.send('This is the Send Route!!')
})

/*  This route redirects requests to Turbo360. */
router.get('/redirect', (req, res) => {
    res.redirect('https://gauravlambha.blogspot.com/')
})

module.exports = router

