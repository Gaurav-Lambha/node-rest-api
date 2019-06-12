module.exports = (app) => {

    const controllers = require('../controllers/Index');
    
    app.get('/:resource', (req, res) => {
        const resource = req.params.resource
        const controller = controllers[resource]
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

    app.get('/:resource/:id', (req, res) => {
        const resource = req.params.resource
        const id = req.params.id

        const controller = controllers[resource]
        if (controller == null) {
            res.json({
                confirmation: 'fail',
                message: 'Invalid Resource'
            })

            return
        }

        controller.getById(id)
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

    // POST - create new entities:
    app.post('/:resource', (req, res) => {
        const resource = req.params.resource
        const controller = controllers[resource]
        if (controller == null) {
            res.json({
                confirmation: 'fail',
                message: 'Invalid Resource'
            })

            return
        }

        controller.post(req.body)
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

    // PUT - updating resources
    app.put('/:resource/:id', (req, res) => {
        const resource = req.params.resource
        const controller = controllers[resource]
        if (controller == null) {
            res.json({
                confirmation: 'fail',
                message: 'Invalid Resource'
            })

            return
        }

        controller.put(req.params.id, req.body)
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

    // DELETE
    app.delete('/:resource/:id', (req, res) => {
        const resource = req.params.resource
        const controller = controllers[resource]
        if (controller == null) {
            res.json({
                confirmation: 'fail',
                message: 'Invalid Resource'
            })

            return
        }

        controller.delete(req.params.id)
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