import BaseDomain from '../domains/base-domain';

export default class RoomRequest extends BaseDomain {
  id: string = '';
  address: string = '';
  description: string = '';
  priceMin: number = -1;
  priceMax: number = -1;
  acreageMin: number = -1;
  acreageMax: number = -1;
  longtitude: number = -1;
  latitude: number = -1;
  status: number = -1;
  accountId: number = -1;
  streetId: number = -1;
  account: any = { id: null };
  street: any = { id: null };
  upTopStatus: number = -1;
  pictures: File[] = [];
  title: string = '';
  typeOfRoom: number = -1;
  wardId: number = -1;

  constructor(init?: Partial<RoomRequest>) {
    super();
    this.assign(init);
  }
}