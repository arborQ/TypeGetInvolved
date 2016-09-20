function getCookie(name : string) : string {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) {
    return parts.pop().split(";").shift();
  }
}

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
