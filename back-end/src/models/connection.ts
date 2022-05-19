import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URI = 'mongodb://mongodb-desafio-blitz:27017/BlitzChallenge';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
  || MONGO_DB_URI
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
