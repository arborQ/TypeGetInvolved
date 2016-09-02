declare module ui.button{
  interface IProps extends __React.Props<{}>{
    Text : string;
    Type? : string;
    OnClick? : () => void;
  }

  interface IComponent extends __React.Component<IProps, {}> {

  }

  enum ButtonTypes{
    Button, Submit
  }
}
