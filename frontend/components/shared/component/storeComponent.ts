import * as React from 'react';
import { store } from 'application-store';

import BaseComponent from './baseComponent';

export default class StoreComponent<P, S> extends BaseComponent<P, S> {
  protected UpdateFromStore: (data: any) => void;
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

  protected StoreDataReduce(data: any): any {
    return data;
  }
  protected Dispatch(type: string, data?: any): void {
    store.dispatch({ type, data });
  }
}
