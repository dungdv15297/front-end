import BaseDomain from './domains/base-domain';

export default class Options extends BaseDomain {
  value: any;
  text: string = '';

  constructor(init?: Partial<Options>) {
    super();
    this.assign(init);
  }
}