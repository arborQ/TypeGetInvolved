function isFunction(input: any): boolean {
  return input && typeof(input) === 'function';
};

export function handlePromise(input: any): Promise<any> {
  if (isFunction(input.then)) {
    return input;
  }
  let promise: Promise<any> = new Promise((resolve: Function, reject: Function) => {
    resolve();
  });
  return promise;
};

export function timeoutPromise(delay: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export function ignoreFail(promise: Promise<any>): Promise<any> {
  return new Promise((resolve) => {
    promise
      .then(() => resolve())
      .catch(() => resolve());
  });
};
