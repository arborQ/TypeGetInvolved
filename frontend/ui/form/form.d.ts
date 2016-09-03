declare module ui.form{
  interface IProps extends __React.Props<{}> {
    OnSubmit : () => Promise<any> | void;
  }

  interface IState {
    IsLoading : boolean;
  }

  interface IComponent extends __React.Component<IProps, {}> {

  }
}
