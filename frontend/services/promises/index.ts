function isFunction(input : any) : boolean {
  return input && typeof(input) === 'function'
};

export var handlePromise = (input : any) : Promise<any> => {
  if(isFunction(input.then)){
    return input;
  }
  var promise = new Promise((resolve, reject) => {
    resolve();
  });
  return promise;
};

export var timeoutPromise = (delay : number) : Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export var ignoreFail = (promise : Promise<any>) : Promise<any> => {
  return new Promise((resolve) => {
    promise
      .then(() => resolve())
      .catch(() => resolve());
  })
}
