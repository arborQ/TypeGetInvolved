import * as React from 'react';
import { MainMenuContainer } from 'ui-view';
import { Link } from 'react-router';

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
        return (<MainMenuContainer isOpen={true} menuItems={[]}>{items}</MainMenuContainer>);
    }
}
