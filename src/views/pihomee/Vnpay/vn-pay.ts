import BaseDomain from '@/base/domains/base-domain';

export default class VNpayData extends BaseDomain {
  amount: string = '';
  bank: string = '';
  constructor(init?: Partial<VNpayData>) {
    super();
    this.assign(init);
  }
}