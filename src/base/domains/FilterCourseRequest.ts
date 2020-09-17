export default class FilterCourseRequest {
  id: number | null = null;

  description: string | null = null;

  startDate: string | null = null;

  endDate: string  | null = null;

  status: number = 0;

  createdDate: string = '';

  createdBy: string = '';

  updatedDate: string = '';

  updateBy: string = '';

  fromDate: string = '';

  toDate: string = '';

constructor(init ?: Partial<FilterCourseRequest>) {
  Object.assign(this, init);
}
}