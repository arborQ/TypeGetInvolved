import * as React from 'react';
import Asside from './aside';

let menuContainerStyle = {
    bottom: 5,
    right: 5,
    position: 'absolute',
};


export default class MainMenuComponent extends React.Component<UserInterface.MainMenu.IProps, UserInterface.MainMenu.IState> {
    public componentWillMount() {
        this.state = { isOpen: false, menuItems: [] };
    }
    public render(): React.ReactElement<{}> {
        return (
            <div>
                <button onClick={() => { this.setState(Object.assign({}, this.state, { isOpen: true })) } } className='mui-btn mui-btn--fab mui-btn--primary' style={menuContainerStyle}>+</button>
                <Asside isOpen={this.state.isOpen}><div>content</div></Asside>
            </div>
        );
    }
}
