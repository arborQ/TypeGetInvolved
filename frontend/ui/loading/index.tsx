import * as React from 'react';

export default class LoadingComponent extends React.Component<ui.loading.IProps, any> {
  public render(): any {
    let style: React.CSSProperties = { 'margin' : '0 auto', 'display' : 'block' };
    return <div ref={this.registerUi} style={style} className='mdl-spinner mdl-js-spinner is-active'></div>;
  }

  private registerUi(element: HTMLElement): void {
    if (!!element) {
      componentHandler.upgradeElement(element);
    }
  }
}
