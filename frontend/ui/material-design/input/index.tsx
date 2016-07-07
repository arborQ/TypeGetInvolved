import * as React from 'react';

export default class InputComponent extends React.Component<UserInterface.Input.IProps, UserInterface.Input.IState> {
    public onChange(e: React.UIEvent): void {
        if (!!this.props.onChange) {
            this.props.onChange(e.target['value']);
        }
    }
    public render(): React.ReactElement<{}> {
        return (
            <div className='mui-textfield'>
                <input type='text' placeholder={this.props.placeholder} value={this.props.value} onChange={this.onChange.bind(this) } />
            </div>);
    }
}
