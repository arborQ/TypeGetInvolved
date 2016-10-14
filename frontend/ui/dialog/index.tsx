import * as React from 'react';
import Button from '../button';
export default class DialogComponent extends React.Component<ui.panel.IProps, { IsOpen: boolean }> {
    private dialogElement: any;

    constructor() {
        super();
        this.state = { IsOpen : true };
    }

    public render(): any {
        let actions = this.props.Actions
            || [ <Button key='cancel' Text='Cancel' OnClick={() => { this.setState({ IsOpen : false }); }} /> ];

        let backdropStyle = {
            'position': 'fixed',
            'left': 0,
            'top': 0,
            'width': '100%',
            'height': '100%',
            'overflow': 'auto',
            'backgroundColor': 'rgba(0,0,0,0.4)',
        };

        return (
            <div>
                <div style={backdropStyle}></div>
                <dialog
                    open={this.state.IsOpen}
                    className='mdl-dialog'
                    style={{ 'maxWidth': '400px', 'width': 'auto', 'position': 'absolute', 'top': '10%' }} >
                        <div className='mdl-dialog__title'>{this.props.Title}</div>
                        <div className='mdl-dialog__content'>{this.props.children}</div>
                        <div className='mdl-dialog__actions'>
                            {actions}
                        </div>
                </dialog>
            </div>
        );
    }
}
