import mongoose from "mongoose";
const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) return handler(req, res);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connected to the databasae successfully");
    })
    .catch((e) => {
      console.log("connection to the database failed", e.message);
    });
  return handler(req, res);
};

export default connectDb;
