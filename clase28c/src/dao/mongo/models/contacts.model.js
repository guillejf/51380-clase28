import mongoose from 'mongoose';

export default mongoose.model(
  'contacts',
  new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: Number,
    active: Boolean,
    phone: String,
  })
);
