import api from 'promise-ajax';

var useApi = api('/api');

export var get = useApi.get.bind(useApi);
export var post = useApi.post.bind(useApi);
export var update = useApi.put.bind(useApi);
export var destroy = useApi.destroy.bind(useApi);
