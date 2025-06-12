import mongoose from 'mongoose';
import dotenv from 'dotenv';

const DB_NAME = process.env.NODE_ENV === 'test' ? 'TEST_DB' : 'PROD_DB';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export const getUserByUsername = async (username) => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URI);
  }
  const user = await User.findOne({ username }).exec();
  return user?.toObject() ?? null;
};
