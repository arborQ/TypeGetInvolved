import * as React from 'react';

export default class InputComponent extends React.Component<ui.input.IProps, ui.input.IState> {
  public componentWillMount(): void {
    this.state = { IsDirty : false };
  }
  public render(): any {
    let containerClasses: string[] = ['mdl-textfield', 'mdl-js-textfield', 'mdl-textfield--floating-label'];
    if (this.state.IsDirty || !!this.props.Value) {
      containerClasses = [...containerClasses, 'is-dirty'];
    }
    if (!!this.props.ErrorText) {
      containerClasses = [...containerClasses, 'is-invalid'];
    }
    return (
          <div className={containerClasses.join(' ')} ref={this.registerUi} style={{ width: '100%' }}>
              <input
                className='mdl-textfield__input'
                type={this.props.Type || 'text'}
                id={this.props.Name}
                value={this.props.Value}
                autoFocus={!!this.props.Autofocus}
                onChange={(e) => { this.props.OnChange(e.target['value']); } } />
              <label
                className='mdl-textfield__label'
                htmlFor={this.props.Name}>{this.props.Text}</label>
              <span className='mdl-textfield__error'>{this.props.ErrorText}</span>
          </div>
    );
  }
  private updateTextValue(event: React.KeyboardEvent): void {
    this.setState(Object.assign({}, this.state, { IsDirty : true }));
    this.props.OnChange(event.target['value']);
  }
  private registerUi(element: HTMLElement): void {
    if (!!element) {
      componentHandler.upgradeElement(element);
    }
  }
}
