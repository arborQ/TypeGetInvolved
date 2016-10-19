declare module ui.message {
    interface IProps extends __React.Props<{}> {
      Text: string;
      ButtonText: string;
    }
    interface IState {
      Messages: string[];
    }
    interface IComponent extends __React.Component<IProps, {}> {
    }
}
