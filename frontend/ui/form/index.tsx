import * as React from 'react';
export default class FormComponent extends React.Component<ui.form.IProps, any> {
    public render(): any {
        return (
            <form onSubmit={(e) => { e.preventDefault(); this.props.OnSubmit(); }}>
                {this.props.children}
            </form>
        );
    }
}