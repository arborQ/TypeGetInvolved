import * as React from 'react';
import { store, navigate } from 'application-store';

import BaseComponent from './baseComponent';

export default class StoreComponent<P, S> extends BaseComponent<P, S> {
  protected UpdateFromStore: (data: store.IApplicationStore) => void;
  private unsubscribeStore: Function;

  public componentDidMount(): void {
    super.componentDidMount();
    let subscribeAction: Function = () => {
      if (!!this.UpdateFromStore) {
          let reducedData: any = this.StoreDataReduce(store.getState());
          this.UpdateFromStore(reducedData);
      }
    };

    this.unsubscribeStore = store.subscribe(subscribeAction);
    subscribeAction();
  }

  public componentWillUnmount(): void {
    super.componentWillUnmount();
    if (!!this.unsubscribeStore) {
      this.unsubscribeStore();
      this.unsubscribeStore = null;
    }
  }

  protected Navigate(path: string): void {
    navigate(path);
  }

  protected StoreDataReduce(data: store.IApplicationStore): any {
    return data;
  }
  
  protected Dispatch(type: string, data?: any): void {
    store.dispatch({ type, data });
  }
}
