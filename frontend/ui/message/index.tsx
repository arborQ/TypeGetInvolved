import * as React from 'react';

export default class MessageComponent extends React.Component<ui.message.IProps, {}> {
    public render(): any {
        return (
            <div ref={this.showMessage.bind(this)} className='mdl-js-snackbar mdl-snackbar mdl-snackbar--active'>
                <div className='mdl-snackbar__text'>{this.props.Text}</div>
                <button className='mdl-snackbar__action' type='button'>{this.props.ButtonText}</button>
            </div>
        );
    }

    private showMessage(element: HTMLElement): void {
        // var data = {
        //     message: this.props.Text, timeout: 10000
        // };
        // componentHandler.upgradeElement(element);
        // element['MaterialSnackbar'].showSnackbar(data);
    }
}
