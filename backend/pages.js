import express from'express';
import { enviroment, application } from '../config/setup';

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import routes from '../frontend/routes.tsx';

var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
    if(req.originalUrl.indexOf('/api/') === 0){
      return next('route');
    }else{
      match({ routes, location: req.url },
      (err, redirectLocation, renderProps) => {
        console.log(renderProps);
      });

      return res.render('index', { title : application, development : enviroment !== 'production' });
    }
});

module.exports = router;
