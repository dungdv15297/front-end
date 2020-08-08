import Domain from './domain';

export default class DefaultDialog extends Domain {
  yes?: string;
  no?: string;
  infor?: string;

  constructor(init?: Partial<DefaultDialog>) {
    super();
    this.init(init);
  }
}