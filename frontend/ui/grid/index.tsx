import * as React from 'react';
import { DefaultComponent } from 'shared';
import Button from '../button';
export default class GridComponent extends DefaultComponent<ui.grid.IProps, ui.grid.IState> {

    public render(): any {
        return (
            <div>
                <div className='mdl-shadow--2dp'>
                    <div style={{ 'padding': '10px' }}>
                        <Button Text='Add' key='add' />
                        <Button Text='Remove' key='remove' />
                        <Button Text='Edit' key='edit' />
                    </div>
                    <table
                    style={{ 'width': '100%', 'border': 'none' }}
                    ref={this.registerUi}
                    className='mdl-data-table mdl-js-data-table'>
                            <thead>
                                <tr>
                                    {this.renderHeaderColumns(this.props.Columns)}
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows(this.props.Columns, this.props.Data)}
                            </tbody>
                    </table>
                    <div style={{ 'padding': '10px' }}>
                        <span className='mdl-chip'>
                                <span className='mdl-chip__text'> {`Elements: ${this.props.Data.length}`} </span>
                        </span>

                    </div>
                </div>
            </div>
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
