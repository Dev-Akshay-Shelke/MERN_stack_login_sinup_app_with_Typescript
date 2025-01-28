import { Schema, model, Document } from "mongoose";

// 1. Create an interface representing the document
interface IUser extends Document {
  firstName: string;
  email: string;
  password: string;
}

// 2. Create a Schema corresponding to the interface
const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// 3. Create a Model
const UserModel = model<IUser>("User", userSchema);

export default UserModel;
