declare module store.messages {
    export interface IMessage {
        Text : string;
    }
    export interface IMessagesState {
        Messages: IMessage[];
    }

    export interface IMessageRepository {
        
    }

    export type MessageReducer = (state: IMessagesState, action: ReactRouterRedux.RouterAction) => IMessagesState;
}