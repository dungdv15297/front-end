import BaseDomain from '../domains/base-domain';

export default class PasswordChangeRequest extends BaseDomain {
  username: string = '';
  password: string = '';
  newPassword: string = '';
  confirm: string = '';

  constructor(init?: Partial<PasswordChangeRequest>) {
    super();
    this.assign(init);
  }
}