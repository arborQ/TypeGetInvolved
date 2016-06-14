import * as React from 'react';

export default class PaperElementComponent extends React.Component<{ childs: any }, { /* state */ }> {
    public render(): React.ReactElement<{}> {
        return (
            <div className="mui-panel" {...this.props}>
                {this.props.children}
            </div>
          );
    }
}
