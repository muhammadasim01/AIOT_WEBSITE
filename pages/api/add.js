import { IncomingForm } from "formidable";
import connectDb from "../../config/dbConnection";
import Blog from "../../models/blog";
import { promises as fs } from "fs";
var mv = require("mv");
export const config = {
  api: {
    bodyParser: false,
  },
};
const handler = async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) return reject(err);
      const { blogTitle, blogContent, isFeatured } = fields;
      const Photo = files.Photo.originalFilename;

      var oldPath = files.Photo.filepath;
      var newPath = `./public/uploads/${files.Photo.originalFilename}`;
      mv(oldPath, newPath, function (err) {});
      const addBlog = await new Blog({
        blogTitle,
        blogContent,
        Photo,
        isFeatured,
      }).save();
      res.status(200).json({ addBlog });
    });
  });
};
export default connectDb(handler);
