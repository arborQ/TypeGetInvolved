declare module ui.panel{
  interface IProps extends __React.Props<{}> {
    Title? : string;
    Actions? : Array<__React.ReactElement<any>>
  }

  interface IComponent extends __React.Component<IProps, {}> {

  }
}
