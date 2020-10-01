import BaseDomain from '@/base/domains/base-domain';

export default class RegisterData extends BaseDomain {
  fullname: string = '';
  phone: string = '';
  username: string = '';
  password: string = '';
  rePassword: string = '';

  constructor(init?: Partial<RegisterData>) {
    super();
    this.assign(init);
  }
}