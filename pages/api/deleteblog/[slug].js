import connectDb from "../../../config/dbConnection";
import Blog from "../../../models/blog";

const handler = async (req, res) => {
  const { slug } = req.query;
  const deleteBlog = await Blog.findByIdAndDelete(slug);
  if (deleteBlog) res.send("blog delete successfully");
};
export default connectDb(handler);
