import * as React from 'react';
import { Link } from 'react-router';
// import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
// import 'mdl/layout/_layout.cscc'
export default class LayoutComponent extends React.Component<ui.layout.IProps, any> {
    public render(): any {
        let links: any[] = (this.props.Links || []).map(l =>
        <Link
        onClick={(e: React.MouseEvent) => { if (!!l.OnClick) { l.OnClick(e); } }}
        key={l.Route}
        className='mdl-navigation__link'
        to={l.Route}>
            {l.Name}
        </Link>);
        return (
            <div className='mdl-layout mdl-js-layout mdl-layout--fixed-drawer'>
                <div className='mdl-layout__drawer'>
                    <span className='mdl-layout-title'>{this.props.Title || 'title'}</span>
                    <nav className='mdl-navigation'>
                        {links}
                    </nav>
                </div>
                <main className='mdl-layout__content'>
                    <div className='page-content' style={{ 'paddingTop' : '20px' }}>{this.props.children}</div>
                </main>
            </div>
        );
    }
}
