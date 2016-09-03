declare module __promisesService{
  export var handlePromise : (input : any) => Promise<any>;
  export var timeoutPromise : (delay : number) => Promise<any>;
  export var ignoreFail : (promise : Promise<any>) => Promise<any>;
}

declare module "promises-service" {
    export = __promisesService;
}
