// module.exports = function (app) {
//   var db = app.dataSources.db;
//   var dbModels = [
//     'Player',
//     'Team',   
//   ];

 

//   if (!process.env.INITTABLES) {
//     return;
//   }

//   console.log('Initializing the database tables...');
//   db.autoupdate(dbModels, function (err) {
//     if (err) throw err;
//   });

// };
