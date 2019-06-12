module.exports = (app) => {

    const controllers = require('../controllers/Index');
    
    app.get('/playersDetails', (req, res) => {
        const controller = controllers.player;
        const filters = req.query

        if (controller == null) {
            res.json({
                confirmation: 'fail',
                message: 'Invalid Resource'
            })
            return
        }

        controller.get(filters)
            .then(data => {
                res.json({
                    confirmation: 'success',
                    data: data
                })
            })
            .catch(err => {
                res.json({
                    confirmation: 'fail',
                    message: err.message
                })
            })
    })


}