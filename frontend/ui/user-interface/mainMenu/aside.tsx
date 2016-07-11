import * as React from 'react';




export default class AsideComponent extends React.Component<{ children?: any, isOpen: boolean }, { isOpen: boolean }> {
    public componentWillMount() : void {
        this.state = { isOpen: this.props.isOpen };
    }

    public componentWillReceiveProps(nextProps: { isOpen: boolean }) : void {
        this.setState(Object.assign({}, this.state, { isOpen: nextProps.isOpen }));
    }

    public render(): React.ReactElement<{}> {
        let sideNav = {
            'position': 'fixed',
            'left': '0',
            'top': '0',
            'width': '100%',
            'height': '100%',
            'overflow': 'hidden',
            'pointerEvents': 'none',
        };

        let visibleSideNav = {
            'pointerEvents': 'auto',
        };

        let sideNavContainer = {
            'position': 'relative',
            'width': '90%',
            'maxWidth': '400px',
            'background': '#FFF',
            'height': '100%',
            'boxShadow': '2px 0 12px rgba(0,0,0,0.4)',
            'transform': 'translateX(-102%)',
            'display': 'flex',
            'flexDirection': 'column',
            'willChange': 'transform',
        };

        let visiblesideNavContainer = {
            'transform': 'none',
        };
        let sideNavStyle = Object.assign({}, sideNav, (this.state.isOpen ? visibleSideNav : {}));
        let sideNavContainerStyle = Object.assign({}, sideNavContainer, (this.state.isOpen ? visiblesideNavContainer : {}));

        return (
            <div style={ { 'position': 'relative', 'zIndex': 10 } }>
                <aside style={sideNavStyle}>
                    <nav style={sideNavContainerStyle}>
                        {this.props.children}
                    </nav>
                </aside>
            </div>
        );
    }
}
