import mongoose from "mongoose";

interface Icard extends mongoose.Document {
  name: string;
  imgUrl: string;
}

const cardSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  imgUrl: { type: String, required: true },
});

const Card = mongoose.model<Icard>("card", cardSchema);

export default Card;
