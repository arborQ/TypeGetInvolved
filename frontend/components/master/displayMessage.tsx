import * as React from 'react';
import { Message } from 'ui';
import { Messages } from 'repository-store';
export default class DisplayMessageComponent extends React.Component<any, { Messages: string[] }> {
    private disposeStoreConnection: Function = null;

    public componentWillUnmount(): void {
        this.disposeStoreConnection();
    }

    public componentWillMount(): void {
        this.disposeStoreConnection = Messages.Store((state) => {
            console.log(state);
            this.setState(Object.assign({}, this.state, { Messages: state.Messages }));
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
        return this.state.Messages.join(', ');
    }
}
