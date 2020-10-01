import BaseDomain from '@/base/domains/base-domain';

export default class LoginData extends BaseDomain {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  time: string = '';

  constructor(init?: Partial<LoginData>) {
    super();
    this.assign(init);
  }
}