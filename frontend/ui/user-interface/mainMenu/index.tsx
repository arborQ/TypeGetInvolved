import * as React from 'react';
import Asside from './aside';
import { Link } from 'react-router';

let menuContainerStyle = {
    bottom: 5,
    right: 5,
    position: 'absolute',
};


export default class MainMenuComponent extends React.Component<UserInterface.MainMenu.IProps, UserInterface.MainMenu.IState> {
    public componentWillMount() {
        this.state = { isOpen: false, menuItems: this.props.menuItems };
    }
    public componentWillReceiveProps(nextProps: { menuItems: Array<string> }) {
        this.setState(Object.assign({}, this.state, { menuItems: nextProps.menuItems }));
    }
    public render(): React.ReactElement<{}> {
        let itemStyle = { 'lineHeight': '50px', 'textAlign': 'center', 'borderBottom': '1px solid #ececec', 'display': 'block' };
        let items = this.state.menuItems.map(i => <Link to={`/${i}`} key={i} style={itemStyle}>{i}</Link>);
        return (
            <div>
                <button onClick={() => { this.setState(Object.assign({}, this.state, { isOpen: true })) } } className='mui-btn mui-btn--fab mui-btn--primary' style={menuContainerStyle}>+</button>
                <Asside isOpen={this.state.isOpen}><div>{items}</div></Asside>
            </div>
        );
    }
}
