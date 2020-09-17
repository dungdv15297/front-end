export default class Conditions {

  code: number | null = null;

  name: string | null= null;

  startDate: string | null= null;

  endDate: string | null= null;

  pageSize: number = 10;
  
  pageNumber: number = 1;

  orderBy: string | null = null;

  constructor(init?: Partial<Conditions>) {
    Object.assign(this, init);
  }
}