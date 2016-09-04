import * as React from 'react';
import { Message } from 'ui';

export default class DisplayMessageComponent extends React.Component<any, any> {
    public render(): any {
        return (
            <Message Text="hallo :) 2" />
        );
    }
}
