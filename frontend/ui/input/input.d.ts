declare module ui.input{
  interface IProps{
    Name : string;
    Text : string;
    Type? : string;
    Autofocus? : boolean;
    OnChange : (text : string) => void;
  }

  interface IComponent extends __React.Component<IProps, {}> {

  }
}
