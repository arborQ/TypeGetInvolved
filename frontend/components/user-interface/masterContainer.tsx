import * as React from 'react';
import TopNavigation from './topNavigation';

export default class MasterComponent extends React.Component<ReactRouter.RouteComponentProps<{}, {}>, { /* state */ }> {
    public render(): React.ReactElement<{}> {
        return (
            <div>
                <header>
                    <div>
                        <TopNavigation key='TopNavigation' selected={this.props.location.pathname} />
                    </div>
                </header>
                <section className='main-content'>{this.props.children}</section>
                <footer></footer>
            </div>
        );
    }
}
