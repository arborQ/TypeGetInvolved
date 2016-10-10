declare module ui.button{
  type DisplayType = 'flat' | 'raised';
  interface IProps extends __React.Props<{}>{
    Text: string;
    Type?: string;
    OnClick?: () => void;
    DisplayType?: DisplayType;
    Disabled?: boolean;
  }

  interface IComponent extends __React.Component<IProps, {}> {

  }

  enum ButtonTypes{
    Button, Submit
  }
}
