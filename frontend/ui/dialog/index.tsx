import * as React from 'react';
import Button from '../button';
export default class DialogComponent extends React.Component<ui.panel.IProps, any> {
    private dialogElement: any;

    public render(): any {
        let actions = this.props.Actions || [ ];
        actions = [<Button key='cancel' Text='Cancel' OnClick={() => { this.dialogElement.close(); }} />, ...actions];
        return (
          <dialog open={false} className='mdl-dialog'
            style={{ 'maxWidth': '400px', 'width': 'auto' }}
            ref={ this.registerDialog.bind(this) }>
                <div className='mdl-dialog__title'>{this.props.Title}</div>
                <div className='mdl-dialog__content'>{this.props.children}</div>
                <div className='mdl-dialog__actions'>
                    {actions}
                </div>
            </dialog>
        );
    }
    private registerDialog(element: HTMLElement): void {
        this.dialogElement = element;
        if (this.dialogElement) {
            componentHandler.upgradeElement(element);
            this.dialogElement.showModal();
        }
    };
}
