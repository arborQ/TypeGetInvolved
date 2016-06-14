import * as React from 'react';
import { Link } from 'react-router';
import { BaseComponent } from '../common';

interface ITopNavigationProps {
    selected: string;
}
interface IMenuItemState {
    display: string;
    name: string;
    selected?: boolean;
}
interface ITopNavigationState {
    menuElements: Array<IMenuItemState>;
}

export default class TopNavigation extends BaseComponent<ITopNavigationProps, ITopNavigationState> {
    constructor() {
        super();
        this.state = {
            menuElements: []
        };
    }
    protected calculateState(props: ITopNavigationProps) {
        let selected = { props };
        this.updateState({ menuElements: [{ name: 'login', display: 'Zaloguj' }] });
    }

    public render(): React.ReactElement<{}> {
        var items = this.state.menuElements.map(f => <li key={f.name}><Link to={f.name}>{f.display}</Link></li>);
        return (
            <ul className='nav navbar-nav'>
                {items}
            </ul>);
    }
}
