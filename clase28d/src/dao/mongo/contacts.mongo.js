import contactsModel from './models/contacts.model.js';

export default class Contacts {
  constructor() {}

  get = async () => {
    const contacts = await contactsModel.find();
    return contacts;
  };

  insert = async (data) => {
    const result = await contactsModel.create(data);
    return result;
  };
}
