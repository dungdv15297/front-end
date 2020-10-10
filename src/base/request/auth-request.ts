import Account from '../domains/account';
import BaseDomain from '../domains/base-domain';

export default class AuthRequest extends BaseDomain {
  username: string = '';
  password: string = '';

  constructor(init ?: Partial<AuthRequest>) {
    super();
    this.assign(init);
  }
}
