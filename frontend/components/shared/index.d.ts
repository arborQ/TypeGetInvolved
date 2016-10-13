
/// <reference path="../../../typings/react/react.d.ts" />

declare module __shared{
  export class DefaultComponent<P, S> extends __React.Component<P, S> implements __React.ComponentLifecycle<P, S> {
    UpdateState(chunkState : any) : void;
    componentDidMount(): void;
  }

  export class StoreComponent<P, S> extends DefaultComponent<P, S> implements __React.ComponentLifecycle<P, S>{ 
    UpdateFromStore(data : store.IApplicationStore) : void;
    Dispatch(actionName : string, data? : any) : void;
    StoreDataReduce(data : store.IApplicationStore) : any;
    Navigate(path: string): void;
  }

  // TODO: implement this
  export class PageComponent<P, S, Q> extends StoreComponent<P, S> implements __React.ComponentLifecycle<P, S>{  
    LoadData(parameters: Q): Promise<any>
  }

  export class AuthorizedComponent<P, S extends { IsAuthorized : boolean }> extends StoreComponent<P, S> implements __React.ComponentLifecycle<P, S>{
    renderContent() : __React.ReactElement<any>;
    renderAnonymous() : __React.ReactElement<any>;
    renderAuthorized() : __React.ReactElement<any>;
  }

  export interface IAuthorizedComponentState{
    IsAuthorized : boolean;
  }
}

declare module "shared" {
     export = __shared;
}