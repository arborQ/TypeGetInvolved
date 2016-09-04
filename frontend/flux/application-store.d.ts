declare module __applicationStore {
    export var store: Redux.Store;
}

declare module "application-store" {
    export = __applicationStore;
}
