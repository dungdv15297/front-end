import BaseDomain from '@/base/domains/base-domain';

export default class SearchValue extends BaseDomain {
  type: number = 0;
  province: number = 0;
  district: number = 0;
  street: number = 0;
  acreage: number = 0;
  price: number = 0;

  constructor(init?: Partial<SearchValue>) {
    super();
    this.assign(init);
  }
}