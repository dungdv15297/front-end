import BaseDomain from '../domains/base-domain';

export default class AccountDetail extends BaseDomain {
  id: string = '';
  name: string = '';
  birthday: string = '';
  gender: number = 0;
  address: string = '';
  email: string = '';
  phone: string = '';
  balance: number = 0;
  status: number = 0;
  updated: string = '';
  username: string = '';
  updatedAc: string = '';

  constructor(init?: Partial<AccountDetail>) {
    super();
    this.assign(init);
  }
}