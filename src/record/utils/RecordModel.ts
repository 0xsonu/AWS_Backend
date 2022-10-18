import { Schema, model } from 'mongoose';
import { ISchema } from '../../utils/customTypes';

interface IRecord extends ISchema {
  name: string;
  fatherName: string;
  address: string;
  mobile: string;
  imei: string;
  fir: string;
  description: string;
  chassNumber: string;
  engilneNumber: string;
}

// Defining Schema
const recordSchema = new Schema<IRecord>(
  {
    name: { type: String, required: true, trim: true },
    fatherName: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    imei: { type: String, required: false, trim: true },
    fir: { type: String, required: false, trim: true },
    description: { type: String, required: false, trim: true },
    chassNumber: { type: String, required: false, trim: true },
    engilneNumber: { type: String },
  },
  { timestamps: true },
);

//  Model

export const Record = model<IRecord>('Record', recordSchema);
