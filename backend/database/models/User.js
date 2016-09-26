import mongoose from 'mongoose';
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
export default mongoose.model('User', new Schema({
    login: String,
    firstName : String,
    lastName : String,
    email : String,
    passwordHash: String
}));
