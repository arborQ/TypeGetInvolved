import * as React from 'react';




export default class AsideComponent extends React.Component<UserInterface.MainMenu.IProps, UserInterface.MainMenu.IState> {
    public componentWillMount(): void {
        this.state = { isOpen: this.props.isOpen, menuItems: [] };
    }

    public componentWillReceiveProps(nextProps: { isOpen: boolean }): void {
        this.setState(Object.assign({}, this.state, { isOpen: nextProps.isOpen }));
    }

    public render(): React.ReactElement<{}> {
        let sideNavClassName = 'side-nav' + (this.state.isOpen ? ' visible' : '');

        return (
            <div style={ { 'position': 'relative', 'zIndex': 10 } }>
                <aside className={sideNavClassName}>
                    <nav className='nav-container'>
                        {this.props.children}
                    </nav>
                </aside>
            </div>
        );
    }
}
