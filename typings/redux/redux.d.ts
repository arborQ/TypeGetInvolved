// Type definitions for Redux v1.0.0
// Project: https://github.com/rackt/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>, Vincent Prouillet <https://github.com/Keats/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Redux {

    interface ActionCreator extends Function {
        (...args: any[]): any;
    }

    interface Reducer extends Function {
        (state: any, action: any): any;
    }

    interface Dispatch<S> extends Function {
        (action: S): any;
    }

    interface StoreMethods {
        dispatch: Dispatch<any>;
        getState(): any;
    }


    interface MiddlewareArg {
        dispatch: Dispatch<any>;
        getState: Function;
    }

    interface Middleware extends Function {
        (obj: MiddlewareArg): Function;
    }

    class Store<T> {
        getReducer(): Reducer;
        replaceReducer(nextReducer: Reducer): void;
        dispatch(action: any): any;
        getState(): T;
        subscribe(listener: Function): Function;
    }

    function createStore<T>(reducer: Reducer, initialState?: any): Store<T>;
    function bindActionCreators<T>(actionCreators: T, dispatch: Dispatch<any>): T;
    function combineReducers<T>(reducers: T): Reducer;
    function applyMiddleware(...middlewares: Middleware[]): Function;
    function compose<T extends Function>(...functions: Function[]): T;
}

declare module "redux" {
    export = Redux;
}
