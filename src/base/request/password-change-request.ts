import BaseDomain from '../domains/base-domain';

export default class PasswordChagneRequest extends BaseDomain {
  username: string = '';
  password: string = '';
  newPassword: string = '';
  confirm: string = '';

  constructor(init?: Partial<PasswordChagneRequest>) {
    super();
    this.assign(init);
  }
}