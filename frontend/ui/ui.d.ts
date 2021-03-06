/// <reference path="../../typings/react/react.d.ts"/>
declare module __ui {
    export var Input: new () => ui.input.IComponent
    export var Layout: new () => ui.layout.IComponent
    export var Panel: new () => ui.panel.IComponent
    export var Form: new () => ui.form.IComponent
    export var Button: new () => ui.button.IComponent
    export var Message: new () => ui.message.IComponent
    export var Grid: new () => ui.grid.IComponent
    export var Dialog: new () => ui.dialog.IComponent
}
declare module "ui" {
    export = __ui;
}
declare var componentHandler: {
  upgradeElement : (element : HTMLElement) => void;
};
declare module ui.common {
    interface IApplicationLink {
        Name: string;
        Route: string;
        Parameters?: any;
        OnClick? : (e : __React.MouseEvent) => void;
    }
}
