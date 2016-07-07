/// <reference path="../../typings/react/react.d.ts"/>
declare namespace __ui {
    export var InputContainer: __React.ComponentClass<UserInterface.Input.IProps>;
    export var PanelContainer: __React.ComponentClass<UserInterface.Panel.IProps>;
}
declare module "ui" {
    export = __ui;
}

declare module "ui-view" {
    export = __ui;
}
 
