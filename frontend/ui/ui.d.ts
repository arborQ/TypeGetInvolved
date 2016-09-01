/// <reference path="../../typings/react/react.d.ts"/>
declare module __ui {
    export var Layout: new() => ui.layout.IComponent
}
declare module "ui" {
    export = __ui;
}
