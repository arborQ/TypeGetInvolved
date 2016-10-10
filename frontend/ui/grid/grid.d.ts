declare module ui.grid {
    type GridData = any & { id : string };
    interface IProps extends __React.Props<{}> {
        Columns: IGridColumn[],
        Data: GridData[],
        Actions?: JSX.Element[],
        OnSelect?: (selectedItems: GridData[]) => Promise<boolean> | void
    }

    interface IState {
        SelectedItems: GridData[]
    }

    interface IComponent extends __React.Component<IProps, {}> {

    }

    interface IGridColumn {
        Name: string;
        Field: string;
    }
}
