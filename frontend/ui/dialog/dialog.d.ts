declare module ui.dialog {
  interface IProps extends __React.Props<{}>{
    Title: string;
    Actions: JSX.Element[]
  }

  interface IComponent extends __React.Component<IProps, {}> {

  }
}
