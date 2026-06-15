import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name: string;
  passwordHash: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: () => new Date() }
});

export const UserModel = model<IUser>('User', userSchema);
