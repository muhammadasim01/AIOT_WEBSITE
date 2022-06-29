import mongoose from "mongoose";
const jwt = require("jsonwebtoken");
const adminSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    tokens: [
      {
        token: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);
adminSchema.methods.generateToken = async function () {
  const token = jwt.sign(
    { id: this._id, name: this.name },
    process.env.SECRET_KEY
  );
  this.tokens = this.tokens.concat({ token });
  await this.save();

  return token;
};
const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);
export default Admin;
