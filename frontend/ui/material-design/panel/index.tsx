import * as React from 'react';

export default class PanelComponent extends React.Component<UserInterface.Panel.IProps, UserInterface.Panel.IState> {
    public render(): React.ReactElement<{}> {
        return (<div className='mui-panel'>{this.props.children}</div>);
    }
}
