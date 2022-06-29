import connectDb from "../../../config/dbConnection";
import Blog from "../../../models/blog";

const handler = async (req, res) => {
  const feature = await Blog.find({ isFeatured: true }).limit(3);
  res.send(feature);
};
export default connectDb(handler);
