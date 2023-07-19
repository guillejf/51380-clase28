import contactsModel from './models/contacts.model.js';

export default class Contacts {
  constructor() {}

  get = async () => {
    const contacts = await contactsModel.find();
    return contacts;
  };

  insert = async (data) => {
    //   {
    //     "first_name": "carlitos",
    //     "last_name": "apache",
    //     "age": 40,
    //     "active": true,
    //     "phone": "35345345354345-234243"

    // }
    const result = await contactsModel.create(data);
    return result;
  };
}
