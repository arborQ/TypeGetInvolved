import * as React from 'react';
import baseComponent from './baseComponent';

export default class storeComponent<P, S> extends baseComponent<P, S>{
  constructor(protected Store : any){
    super();
  }
  private unsubscribeStore : () => void;

  public componentDidMount() : void {
    super.componentDidMount();
      this.unsubscribeStore = this.Store.subscribe(() => {
        if(!!this.UpdateFromStore){
            this.UpdateFromStore(this.Store.getState());
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
}