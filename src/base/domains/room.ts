import DistrictResponse from '../response/district-response';
import ProvinceResponse from '../response/province-response';
import WardResponse from '../response/ward-response';

export default class Room {
    id: string = '';

    image: string = '';

    isUptop: boolean = false;

    address: string = '';

    description: string = '';

    priceMin: number = -1;

    priceMax: number = -1;

    acreageMin: number = -1;

    acreageMax: number = -1;

    longtitude: number = 1.111111111;

    latitude: number = 1.111111111;

    status: number = -1;

    accountId: string = '';

    wardId: number = -1;

    account: any;

    upTopStatus: number = -1;

    pictures: string[] = [];

    title: string = '';

    type: number = -1;

    typeOfRoom: number = -1;

    createdBy: string = '';

    ward!: WardResponse;

    province!: ProvinceResponse;

    district!: DistrictResponse;

    createdDate: string = '';

    updatedDate: string = '';
}