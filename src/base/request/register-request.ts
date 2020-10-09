import BaseDomain from '@/base/domains/base-domain';

export default class RegisterRequest extends BaseDomain {
  fullname: string = '';
  phone: string = '';
  username: string = '';
  password: string = '';
  rePassword: string = '';

  constructor(init?: Partial<RegisterRequest>) {
    super();
    this.assign(init);
  }
}