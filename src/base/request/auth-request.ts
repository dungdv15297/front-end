import Account from '../domains/account';
import BaseDomain from '../domains/base-domain';

export default class AuthRequest extends BaseDomain {
  account: Account = new Account();

  constructor(init ?: Partial<AuthRequest>) {
    super();
    this.assign(init);
  }
}
