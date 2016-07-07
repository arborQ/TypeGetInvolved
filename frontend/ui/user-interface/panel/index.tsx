import * as React from 'react';
import { PanelContainer } from 'ui-view';

export default class PanelComponent extends React.Component<UserInterface.Panel.IProps, UserInterface.Panel.IState> {
    public render(): React.ReactElement<{}> {
        return (<PanelContainer {...this.props} />);
    }
}
