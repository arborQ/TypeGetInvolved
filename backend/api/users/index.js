import express from 'express';
import hashGenerator from 'password-hash';

import { User } from '../../database/models';
import { modelToViewModel, viewModelToModel } from './userViewModelMappings'
var router = express.Router();
var api = router.route('/users/:id*?');

api
  .get((req, res) => { 
    var findUsers = User.find().then((users) =>{
        res.send(users.map(modelToViewModel));
    });
   })
  .post((req, res, next) => {
    let  { login, firstName, lastName, email } = req.body;
    let newUser = new User({
      login,
      firstName,
      lastName,
      email,
      passwordHash : hashGenerator.generate('haslo123!')
    });

    newUser.save((err) => {
      res.send(newUser._id);
    });
  })
  .put((req, res, next) => { 
    let  { id } = req.body;
    console.log(id);
    User.findOne({ _id : id }).then((user) => {
      Object.assign(user, viewModelToModel(req.body))
      user.save(() => {
        res.send(modelToViewModel(user)); 
      });
    }).catch((err) => {
      res.send({ success : false });
    });
   })
  .delete((req, res, next) => {
    let  { _id } = req.body;
    
    User.remove({ _id }, (err, bear) => { res.send({ success : true }); });
  });

module.exports = router;
