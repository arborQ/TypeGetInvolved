export function getCookie(name: string): string {
  let value: string = '; ' + document.cookie;
  let parts: string[] = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};

export function deleteCookie(name: string ): void {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
