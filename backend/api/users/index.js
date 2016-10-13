import express from 'express';
import hashGenerator from 'password-hash';

import { User } from '../../database/models';

var router = express.Router();
var api = router.route('/users');

api
  .get((req, res) => { 
    var findUsers = User.find();

    var timeout = new Promise((resolve) => {
      setTimeout(() => { resolve(null); }, 2000);
    });

    Promise.race([findUsers, timeout]).then((users) =>{
      if(!!users){
        res.send(users.map(u => { return { login: u.login, email: u.email, firstName: u.firstName, lastName: u.lastName, id: u._id } }))
      }else{
        res.send({ timeout: 2000 });
      }
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

    console.log(newUser.save((err) => {
      res.send({ success : !err });
    }));
  })
  .delete((req, res, next) => {
    let  { _id } = req.body;
    console.log(_id)
    User.remove({ _id }, (err, bear) => { res.send({ success : true }); });
  });

module.exports = router;
