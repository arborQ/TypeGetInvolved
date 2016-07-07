import * as React from 'react';

let menuContainerStyle = {
    left: 0,
    position: 'absolute'
};


export default class MainMenuComponent extends React.Component<UserInterface.MainMenu.IProps, UserInterface.MainMenu.IState> {
    public render(): React.ReactElement<{}> {
        return (<div style={menuContainerStyle}>MainMenuComponent</div>);
    }
}
