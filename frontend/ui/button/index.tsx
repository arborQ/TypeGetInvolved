import * as React from 'react';

export default class ButtonComponent extends React.Component<ui.button.IProps, any> {
  public render(): any {
    return (
      <button
      type={this.props.Type || 'button'}
      className='mdl-button mdl-js-button mdl-button--raised'
      onClick={() => { if(!!this.props.OnClick) { this.props.OnClick(); } }}>
        {this.props.Text}
      </button>
    );
  }
}
