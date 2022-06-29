import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema(
  {
    blogTitle: String,
    blogContent: String,
    Photo: String,
    isFeatured: Boolean,
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export default Blog;
