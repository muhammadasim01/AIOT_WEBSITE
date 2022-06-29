import connectDb from "../../config/dbConnection";
import Blog from "../../models/blog";
const handler = async (req, res) => {
  const data = await Blog.find({});
  res.send(data);
};
export default connectDb(handler);
