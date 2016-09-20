import * as React from 'react';
import StoreComponent from './storeComponent';

export default class authorizedComponent<P, S extends { IsAuthorized : boolean }> extends StoreComponent<P, S>{
    public renderContent() : React.ReactElement<any> { 
      if(this.state.IsAuthorized){
        return this.renderAuthorized();
      }else{
        return this.renderAnonymous();
      }
    };
    public renderAnonymous() : React.ReactElement<any> { return null; };
    public renderAuthorized() : React.ReactElement<any> { return null; };

    public render() : React.ReactElement<any>{
      return this.renderContent();
    }
}