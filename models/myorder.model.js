import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const myOrderSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  total: {
    type: Number
  },
  staffId: {
    type: String
  },
  staffName: {
    type: String,
    default: "admin"
  },
  userId: {
    type: String
  },
  userPhone: {
    type: String,
    required: true
  },
  userFullName: {
    type: String,
    required: true
  },
  userAddress: {
    type: String,
    required: true
  },
  userEmail: {
    type: String
  },
  products: {
    type: Array
  },
  createdOn: {
    type: Date
  },
  createdBy: {
    type: String
  },
  updatedOn: {
    type: Date
  },
  updatedBy: {
    type: String
  },
  status: {
    type: String,
    default: "New | Pending | Approved | Completed"
  }
});

export default mongoose.model('MyOrder', myOrderSchema);