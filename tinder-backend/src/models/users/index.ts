import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const uri: string | undefined = process.env.MONGODB_URI;

if(uri){
  mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to mongo database..."))
  .catch((err) => console.error("Could not connect to mongo database...", err));
}


interface authenticator extends mongoose.Document {
  email: string;
  password: string;
}

const userSChema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model<authenticator>("user", userSChema);
export default User;
