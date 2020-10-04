import BaseDomain from './base-domain';

export default class Account extends BaseDomain {
    username: string = '';
    password: string = '';
    status: number = 0;
    verified: number = 0;

    constructor(init?: Partial<Account>) {
      super();
      this.assign(init);
    }
}