export function extendsClasses(...args): Function {
  return function (target) {
    [...args].forEach(exClass => {
      for (const prop of Object.getOwnPropertyNames(exClass.prototype)) {
        target.prototype[prop] = exClass.prototype[prop]
      }
    });
  }
}
