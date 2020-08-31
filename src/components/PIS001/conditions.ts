export default class Conditions {
  demo: string = '';
  demo2: string = '';

  constructor(init?: Partial<Conditions>) {
    Object.assign(this, init);
  }
}