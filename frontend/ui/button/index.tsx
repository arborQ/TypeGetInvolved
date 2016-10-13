import * as React from 'react';

export default class ButtonComponent extends React.Component<ui.button.IProps, any> {
  public render(): any {
    let displayType = (this.props.DisplayType || 'flat') === 'flat' ? '' : 'mdl-button--raised';
    return (
      <button
      disabled={this.props.Disabled || false}
      type={this.props.Type || 'button'}
      className={`mdl-button mdl-js-button mdl-js-ripple-effect ${displayType}`}
      onClick={() => { if(!!this.props.OnClick) { this.props.OnClick(); } }}>
        {this.props.Text}
      </button>
    );
  }
}
