import BaseDomain from '@/base/domains/base-domain';

export default class SearchValue extends BaseDomain {
  type: number | null = null;
  province: number | null = null;
  district: number | null = null;
  street: number | null = null;
  acreage: number | null = null;
  price: number | null = null;

  constructor(init?: Partial<SearchValue>) {
    super();
    this.assign(init);
  }
}