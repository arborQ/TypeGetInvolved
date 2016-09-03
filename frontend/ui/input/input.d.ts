declare module ui.input{
  interface IProps{
    Name : string;
    Value : string;
    Text : string;
    Type? : string;
    Autofocus? : boolean;
    OnChange : (text : string) => void;

    ErrorText? : string | Array<string>;
  }

  interface IState{
    IsDirty : boolean;
  }

  interface IComponent extends __React.Component<IProps, {}> {

  }
}
