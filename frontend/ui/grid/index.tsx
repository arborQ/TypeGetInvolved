import * as React from 'react';
import { DefaultComponent } from 'shared';

export default class GridComponent extends DefaultComponent<ui.grid.IProps, ui.grid.IState> {

    public render(): any {
        return (
            <table ref={this.registerUi} className='mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp'>
                    <thead>
                        <tr>
                            {this.renderHeaderColumns(this.props.Columns)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows(this.props.Columns, this.props.Data)}
                    </tbody>
                </table>
        );
    };

    private renderHeaderColumns(columns: ui.grid.IGridColumn[]): JSX.Element[] {
        let key: number = 1;
        let headerColumns: JSX.Element[] = columns.map(c => <th key={key++}>{c.Name}</th>);
        return headerColumns;
    }

    private renderBodyColumns(columns: ui.grid.IGridColumn[], data: ui.grid.GridData): JSX.Element[] {
        let key: number = 1;
        let headerColumns: JSX.Element[] = columns.map(c => <td key={key++}>{data[c.Field] || ''}</td>);
        return headerColumns;
    }

    private renderRows(columns: ui.grid.IGridColumn[], data: ui.grid.GridData[]): JSX.Element[] {
        let key: number = 1;
        let rows: JSX.Element[] = data.map(r => <tr key={key++}>{this.renderBodyColumns(columns, r)}</tr>);
        return rows;
    }

    private registerUi(element: HTMLElement): void {
        if (!!element) {
        componentHandler.upgradeElement(element);
        }
  }
}
