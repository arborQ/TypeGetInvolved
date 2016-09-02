declare module ui.layout {


    interface IProps {
        Title?: string;
        Links: Array<ui.common.IApplicationLink>;
        children?: any;
    }
    interface IState {

    }
    interface IComponent extends __React.Component<IProps, IState> {

    }
}
