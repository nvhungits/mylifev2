import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const propertySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: {
    type: String
  },
  name: {
    type: String,
    required: true,
  }
});

export default mongoose.model('Property', propertySchema);