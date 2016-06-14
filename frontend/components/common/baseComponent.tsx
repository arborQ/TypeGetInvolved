import * as React from 'react';

export default class BaseComponent<P, S> extends React.Component<P, S> {
    protected updateState(newState: S): void {
        this.setState(Object.assign({}, this.state, newState));
    }

    protected calculateState(props: P): void {
        throw 'calculateState not implemented';
    }

    public componentWillMount(): void {
        this.calculateState(this.props);
    }

    public componentWillReciveProps(next: P): void {
        this.calculateState(next);
    }
};
