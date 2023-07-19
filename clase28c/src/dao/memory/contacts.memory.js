export default class Contacts {
  constructor() {
    this.data = [];
  }

  get = () => {
    return this.data;
  };

  insert = (data) => {
    this.data.push(data);
    return data;
  };
}
