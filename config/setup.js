var nconf = require('nconf');
nconf.env().file({ file: 'config.json', search: true });

module.exports = {
  application : nconf.get("APP_NAME") || 'Type GetInvolved',
  enviroment : nconf.get("NODE_ENV") || 'development',
  secret : nconf.get("SECRET") || '$*skcyw)uc^ezjikuxe&&c(()#bvh(h7jn8579ye+z$+qqc0e4',
  database : nconf.get("CONNECTION_STRING") || 'mongodb://localhost:27017/test'
};
