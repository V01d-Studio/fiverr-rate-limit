import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.

// 2. Create a Schema corresponding to the document interface.
const roleSchema = new Schema<IRole>({
  seniority: { type: String, required: true },
  code: { type: Number, required: true },
  function: { type: String, required: true },
});

// 3. Create a Model.
const RoleModel = model<IRole>("Role", roleSchema);

export default RoleModel;
