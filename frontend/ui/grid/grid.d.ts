declare module ui.grid {
    type GridData = any & { id : string };
    interface IProps extends __React.Props<{}> {
        Columns: IGridColumn[],
        Data: GridData[]
    }

    interface IState {
    }

    interface IComponent extends __React.Component<IProps, {}> {

    }

    interface IGridColumn {
        Name: string;
        Field: string;
    }
}
