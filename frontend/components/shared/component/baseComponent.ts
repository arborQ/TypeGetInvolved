import * as React from 'react';

export default class BaseComponent<P, S> extends React.Component<P, S> {

  protected IsMounted: boolean;

  public componentDidMount(): void {
    this.IsMounted = true;
  }

  public componentWillUnmount(): void {
    this.IsMounted = false;
  }

  protected UpdateState(chunkState: any): void {
    if (this.IsMounted) {
      let newState: any = Object.assign({} , this.state, chunkState);
      this.setState(newState);
    }else{
      console.log('not mounted');
    }
  }
}
