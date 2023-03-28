import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: false },
  email: { type: String, required: true },
  password: String,
});

// 3. Create a Model.
const User = model<IUser>("User", userSchema);

export default User;