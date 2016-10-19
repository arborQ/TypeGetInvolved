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
            return ( <Message Text={display} ButtonText={this.state.Messages.length.toString()} /> );
        }
        return null;
    }

    private displayText(): string {
        if (this.state.Messages.length > 1) {
            return 'New messages';
        }
        return this.state.Messages.join(', ');
    }
}
