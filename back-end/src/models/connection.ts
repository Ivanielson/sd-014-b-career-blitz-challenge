import mongoose from 'mongoose';
import 'dotenv/config';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
  || 'mongodb://localhost:27017/BlitzChallenge'
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
