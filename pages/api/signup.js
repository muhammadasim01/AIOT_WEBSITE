import connectDb from "../../config/dbConnection";
import Admin from "../../models/Admin";

const handler = async (req, res) => {
  const { name, email, password } = req.body;
  const newAdmin = await new Admin({ name, email, password }).save();
  res.send("sign up successfully");
};
export default connectDb(handler);
