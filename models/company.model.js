import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const companySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: {
    type: String
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  logo_dark: {
    type: String
  },
  logo: {
    type: String
  }
});

export default mongoose.model('Company', companySchema);