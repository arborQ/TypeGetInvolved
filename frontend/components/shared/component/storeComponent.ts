import * as React from 'react';
import { store } from 'application-store';

import baseComponent from './baseComponent';

export default class storeComponent<P, S> extends baseComponent<P, S>{

  private unsubscribeStore : Function;

  public componentDidMount() : void {
    super.componentDidMount();
      this.unsubscribeStore = store.subscribe(() => {
        if(!!this.UpdateFromStore){
            this.UpdateFromStore(store.getState());
        }
      });
  }

  public componentWillUnmount() : void {
    super.componentWillUnmount();
    if(!!this.unsubscribeStore){
      this.unsubscribeStore();
      this.unsubscribeStore = null;
    }
  }
  protected UpdateFromStore : (data : any) => void;

  protected Dispatch(type : string, data : any) : void {
    console.log({data});
    store.dispatch({ type, data });
  }
}