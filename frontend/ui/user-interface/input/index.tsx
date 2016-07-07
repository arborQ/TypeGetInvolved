import * as React from 'react';
import { InputContainer } from 'ui-view';
export default class InputComponent extends React.Component<UserInterface.Input.IProps, UserInterface.Input.IState> {
    public render(): React.ReactElement<{}> {
        return (<InputContainer {...this.props} />);
    }
}
