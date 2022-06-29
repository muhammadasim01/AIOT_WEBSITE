import connectDb from "../../../config/dbConnection";
import Blog from "../../../models/blog";

const handler = async (req, res) => {
  const { slug } = req.query;
  const blog = slug != undefined ? await Blog.find({ _id: slug }) : "";
  if (blog) res.send(blog);
};
export default connectDb(handler);
