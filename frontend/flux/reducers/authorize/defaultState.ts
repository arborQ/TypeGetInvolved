import { getCookie } from './cookies';
export default function() : flux.reducers.authorize.IState {
    var token = getCookie('jwt-token');
    if(!!token){
        return { 
            Expire: new Date(),
            IsAuthenticated : true,
            UserName : token
        };
    }else{
    return { 
            Expire: new Date(),
            IsAuthenticated : false,
            UserName : token
        };
    }
    
}
