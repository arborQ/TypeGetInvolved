import * as React from 'react';
import { Message } from 'ui';
import { Messages } from 'repository-store';

export default class DisplayMessageComponent extends React.Component<any, { Messages: string[] }> {
    private disposeStoreConnection: Function = null;

    public componentWillUnmount(): void {
        this.disposeStoreConnection();
    }

    public componentWillMount(): void {
        this.state = { Messages: [] };
        this.disposeStoreConnection = Messages.Store((state) => {
            this.setState(Object.assign({}, this.state, { Messages: state.Messages.map(a => a.Text) }));
        });
    }

    public render(): JSX.Element {
        let display = this.displayText();
        if (display.length !== 0) {
            return ( <Message Text={display} /> );
        }
        return <div></div>;
    }

    private displayText(): string {
        console.log('this.state.Messages', this.state.Messages);
        return this.state.Messages.join(', ');
    }
}
