
/// <reference path="../../../typings/react/react.d.ts" />

declare module __shared{
  export class DefaultComponent<P, S> extends __React.Component<P, S> {
    UpdateState(chunkState : any) : void;
  }

  export class StoreComponent<P, S> extends DefaultComponent<P, S>{ 
    UpdateFromStore(data : any) : void;
  }
}

declare module "shared" {
     export = __shared;
}