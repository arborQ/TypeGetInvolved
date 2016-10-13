import * as React from 'react';
import Button from '../button';
export default class DialogComponent extends React.Component<ui.panel.IProps, { IsOpen: boolean }> {
    private dialogElement: any;
    constructor() {
        super();
        this.state = { IsOpen : true };
    }
    public render(): any {
        let actions = this.props.Actions || [ ];
        actions = [<Button key='cancel' Text='Cancel' OnClick={() => { this.setState({ IsOpen : false }); }} />, ...actions];
        return (
          <dialog open={this.state.IsOpen} className='mdl-dialog'
            style={{ 'maxWidth': '400px', 'width': 'auto', 'position': 'absolute', 'top': '10%' }} >
                <div className='mdl-dialog__title'>{this.props.Title}</div>
                <div className='mdl-dialog__content'>{this.props.children}</div>
                <div className='mdl-dialog__actions'>
                    {actions}
                </div>
            </dialog>
        );
    }
}
