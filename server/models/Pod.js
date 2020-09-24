import mongoose from 'mongoose';

const podSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      unique: false,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      unique: true,
      required: false,
    },
  },
  { timestamps: true },
);

const Pod = mongoose.model('Pod', podSchema);

export default Pod;
