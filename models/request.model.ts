import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.

// 2. Create a Schema corresponding to the document interface.
const requestSchema = new Schema<IRequest>({
  request: { type: String, required: true },
  code: { type: Number, required: true },
});

// 3. Create a Model.
const RequestModel = model<IRequest>("Request", requestSchema);

export default RequestModel;
