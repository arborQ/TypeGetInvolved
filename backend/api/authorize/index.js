//var express = require('express');
import express from 'express';
import jwt from 'jsonwebtoken';
var { secret } = require('../../../config/setup');
/* GET users listing. */

var router = express.Router();
var api = router.route('/authorize');

api
  .get((req, res) => { res.send({ work : true }) })
  .post((req, res, next) => {
    var { login, password } = req.body;

    if(login === 'arbor' && password === 'arbor'){
      var token = jwt.sign({ isAuthenticated : true, login : 'arbor', email : 'arbor@o2.pl', roles : [ 'admin' ] }, secret);
      res.cookie('jwt-token', token, { expire : new Date() + 9999 });
      res.send({ isAuthenticated : true });
    }else{
      res.send({ isAuthenticated : false, message : "Unknown login or password" });
    }
  });

module.exports = router;
