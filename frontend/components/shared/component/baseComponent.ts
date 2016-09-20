import * as React from 'react';

export default class baseComponent<P, S> extends React.Component<P, S>{

  protected IsMounted : boolean;

  public componentDidMount() : void {
    this.IsMounted = true;
  }

  public componentWillUnmount() : void {
    this.IsMounted = false;
  }

  protected UpdateState(chunkState : any) : void {
    if(this.IsMounted){
      let newState = Object.assign({} , this.state, chunkState);
      this.setState(newState);
    }
  }
}