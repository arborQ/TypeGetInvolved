declare module __promiseAjax{
  export var get : (url : string, data : any) => Promise<any>;
  export var post : (url : string, data : any) => Promise<any>;
  export var destroy : (url : string, data : any) => Promise<any>;
}
declare module "ajax" {
    export = __promiseAjax;
}
