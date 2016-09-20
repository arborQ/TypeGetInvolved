import * as React from 'react';
import { store } from 'application-store';

import BaseComponent from './baseComponent';

export default class storeComponent<P, S> extends BaseComponent<P, S>{

  private unsubscribeStore : Function;

  public componentDidMount() : void {
    super.componentDidMount();
    let subscribeAction = () => {
      if(!!this.UpdateFromStore){
          var reducedData = this.StoreDataReduce(store.getState());
          this.UpdateFromStore(reducedData);
      }
    };

    this.unsubscribeStore = store.subscribe(subscribeAction);
    subscribeAction();
  }

  public componentWillUnmount() : void {
    super.componentWillUnmount();
    if(!!this.unsubscribeStore){
      this.unsubscribeStore();
      this.unsubscribeStore = null;
    }
  }
  protected UpdateFromStore : (data : any) => void;

  protected StoreDataReduce(data : any) : any{
    return data;
  }
  protected Dispatch(type : string, data? : any) : void {
    store.dispatch({ type, data });
  }
}