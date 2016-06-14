import * as React from 'react';

export default class InputElementComponent extends React.Component<{ /* props */ }, { /* state */ }> {
    public render(): React.ReactElement<{}> {
        return (
          <div className="mui-textfield">
            <input {...this.props} />
          </div>
        );
    }
}
