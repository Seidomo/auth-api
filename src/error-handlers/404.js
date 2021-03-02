'use strict';

module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};



// module.exports = function (err, req, res, next) {

//   // Sometimes, errors come in as an object, others as a string
//   const error = err.message ? err.message : err;

//   const errorObject = {
//     status: 404,
//     message: error
//   }
//   res.status(404).json(errorObject);
// }
