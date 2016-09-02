import * as React from 'react';
export default class InputComponent extends React.Component<ui.input.IProps, any> {
  public render(): any {
    return (
          <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label' ref={this.registerUi}>
              <input
                className='mdl-textfield__input'
                type={this.props.Type || 'text'}
                id={this.props.Name}
                autoFocus={!!this.props.Autofocus}
                onChange={(e) => { this.props.OnChange(e.target['value']); } } />
              <label
                className='mdl-textfield__label'
                htmlFor={this.props.Name}>{this.props.Text}</label>
          </div>
    );
  }

  private registerUi(element : HTMLElement){
    if(!!element){
      componentHandler.upgradeElement(element);
    }
  }
}
