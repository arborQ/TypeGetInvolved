var { secret } = require('../config');
var jwt = require('express-jwt');

var getToken = (req) => {
  return req.headers['auth-token'];
};
var router =
  jwt({ secret, getToken })
  .unless({ path:
    [
      //public paths
      '/api/authorize'
    ]
  });
module.exports = router;
