import user from './User';
import mongoose from 'mongoose';
import { database } from '../../../config/setup';

mongoose.Promise = global.Promise;
mongoose.connect(database);
export var User = user;
