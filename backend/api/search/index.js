//var express = require('express');
import express from 'express';
import hashGenerator from 'password-hash';
import { sortBy, filter } from 'lodash';
import { User } from '../../database/models';

var router = express.Router();
var api = router.route('/search');

var createSearchCondition = (fields, searchCondition) => {
  var conditionList = [];
  for(var i = 0; i < fields.length; i++){
    let condition = {};
    var fieldName = fields[i];
    condition[fieldName] = { $regex : `^${searchCondition}`, $options: "i" };
    conditionList.push(condition);
  }

  return {
    $or : conditionList
  };
};

api
  .post((req, res) => {
    let  { name, firstName, lastName, email, password } = req.body;
    let newUser = new User({
      name,
      firstName,
      lastName,
      email,
      passwordHash : hashGenerator.generate(password)
    });

    newUser.save((err) => {
      res.send({ success : !err });
    });
  });

api
  .get((req, res, next) => {
    var items = User.find(createSearchCondition([ 'firstName', 'lastName', 'email' ], req.query.search),
    (err, users) => {
      res.send(users.map(u => { return { email : u.email, firstName : u.firstName, lastName : u.lastName, id : u._id } }))
    });
  });

module.exports = router;
