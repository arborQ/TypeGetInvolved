declare module ui.button{
  type DisplayType = 'flat' | 'raised';
  interface IProps extends __React.Props<{}>{
    Text: string;
    Type?: string;
    OnClick?: () => void;
    DisplayType?: DisplayType;
  }

  interface IComponent extends __React.Component<IProps, {}> {

  }

  enum ButtonTypes{
    Button, Submit
  }
}
