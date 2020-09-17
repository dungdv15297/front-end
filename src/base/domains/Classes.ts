export default class Classes {
  id: number = 0;
  name: string = '';
  description: string = '';
  status: number = 0;

  constructor(init?: Partial<Classes>) {
    Object.assign(this, init);
  }
}