module.exports = (app) => {

    /* define a simple route */
    app.get('/', (req, res) => {
        res.json({ "message": "Welcome to Node CRUD API application by Gaurav Lambha!!" });
    });

    /*  This route render json data */
    app.get('/json', (req, res) => {
        res.json({
            confirmation: 'success',
            app: process.env.TURBO_APP_ID,
            data: 'this is a sample json route!!'
        })
    })

    /*  This route sends text back as plain text. */
    app.get('/send', (req, res) => {
        res.send('This is the Send Route!!')
    })

    /*  This route redirects requests to Turbo360. */
    app.get('/redirect', (req, res) => {
        res.redirect('https://gauravlambha.blogspot.com/')
    })
}

