import express from'express';
import { enviroment, application } from '../config/setup';

var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
    if(req.originalUrl.indexOf('/api/') === 0){
      return next('route');
    }else{
      return res.render('index', { title : application, development : enviroment !== 'production' });
    }
});

module.exports = router;
