// Application Level Middleware
var routerAuthMiddleware = function (req, res, next) {
    console.log('Router Level Middleware=>>>',
     `url:  ${req.url} , 
     method: ${req.method} ,
     host: ${req.headers.host} ,    
     Authorization: ${req.headers.authorization}
     Authentication: ${req.headers.authentication} ,
     Time: ${new Date()}`)

    if (req.headers && req.headers.authentication === 'zyxabc123') {
        next()
    } else {
        res.status(401).send('Invalid Authentication Key!!!');
    }
}

module.exports = routerAuthMiddleware