// Application Level Middleware
var authMiddleware = function (req, res, next) {
    // console.log('req', req);
    console.log('Application Level Middleware=>>>',
    `url:  ${req.url} , 
     method: ${req.method} ,
     host: ${req.headers.host} ,    
     Authorization: ${req.headers.authorization}
     Authentication: ${req.headers.authentication} ,
     Time: ${new Date()}`);

     next();
    
}

module.exports = authMiddleware