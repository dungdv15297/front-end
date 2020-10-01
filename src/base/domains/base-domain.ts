export default class BaseDomain {
  constructor() {}

  assign(init?: Partial<any>) {
    if (init) {
      for (let property in init) {
          if (init.hasOwnProperty(property))
              (<any>this)[property] = (<any>init)[property];
      }
    }
  }
}