export default class CourseDTO {
  id: number = 0;

  description: string = '';

  startDate: string = '';

  endDate: string = '';

  status: number = 0;

  createdDate: string = '';

  createdBy: string = '';

  lastModifiedDate: string = '';

  lastModifiedBy: string = '';

  constructor(init?: Partial<CourseDTO>) {
    Object.assign(this, init);
  }
}