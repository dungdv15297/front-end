
export default class defaultDialog {
  yes = '';
  no = '';
  infor = '';

  constructor(args?: defaultDialog) {
    Object.assign(this, args);
  }
}