import api from 'promise-ajax';
import UserRepository from './repository/UserRepository';

var useApi = api('/api');

export var get = useApi.get.bind(useApi);
export var post = useApi.post.bind(useApi);
export var destroy = useApi.destroy.bind(useApi);

export var repository = { UserRepository };
