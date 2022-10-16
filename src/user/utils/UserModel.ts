import { Schema, model } from 'mongoose';
import { ISchema } from '../../utils/customTypes';

interface IUser extends ISchema {
  userId: string;
  name: string;
  email: string;
  picture: string;
  active: boolean;
  confirmed: boolean;
  phone: string;
}

const userSchema = new Schema<IUser>(
  {
    userId: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    picture: {
      type: String,
      default:
        'https://codemarket-common-bucket.s3.amazonaws.com/public/defaults/pictures/default.jpg',
    },
    active: {
      type: Boolean,
      default: true,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

userSchema.index({ userId: 1 });

export const User = model<IUser>('User', userSchema);
