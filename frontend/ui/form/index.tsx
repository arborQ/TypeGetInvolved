import * as React from 'react';
import Loading from '../loading';
import { DefaultComponent } from 'shared';

import { handlePromise, timeoutPromise, ignoreFail } from 'promises-service';

export default class FormComponent extends DefaultComponent<ui.form.IProps, ui.form.IState> {
    constructor() {
      super();
      this.state = { IsLoading : false };
    }

    public render(): any {
      let content: any = this.state.IsLoading ? <Loading /> : this.props.children;
      if (!!this.state.IsLoading) {
        return <Loading />;
      } else {
          return (
              <form onSubmit={this.submitForm.bind(this)}>
                  {this.props.children}
              </form>
          );
        }
    };

    private startLoading(): Promise<any> {
      return timeoutPromise(50).then(() => {
        this.UpdateState({ IsLoading : true });
      });
    };

    private stopLoading(): void {
        this.UpdateState({ IsLoading : false });
    };

    private submitForm(e: Event): void {
      e.preventDefault();
      if (this.props.OnSubmit) {
        Promise.all([ this.startLoading(), ignoreFail(handlePromise(this.props.OnSubmit())) ])
         .then(this.stopLoading.bind(this));
      }
    };
}
