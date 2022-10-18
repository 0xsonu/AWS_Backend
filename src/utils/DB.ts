import * as mongoose from 'mongoose';
import { createCollections } from './createCollections';

let isConnected;

export const DB = async (DB_STRING?: string) => {
  try {
    if (isConnected) {
      console.log('=> using existing database connection');
    } else if (!process.env.DATABASE && !DB_STRING) {
      throw new Error('Database connection string not found');
    } else {
      const db = await mongoose.connect(process.env.DATABASE || '');
      isConnected = db.connections[0].readyState;
      console.log('DB Connection Successful!');
    }
    await createCollections();
  } catch (error) {
    console.log('DB Connection Failed');
    throw error;
  }
};
