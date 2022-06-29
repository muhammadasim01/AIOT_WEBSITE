import connectDb from "../../config/dbConnection";
import Admin from "../../models/Admin";

const handler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isExist = await Admin.findOne({ email });
    if (isExist) {
      if (isExist.password === password) {
        const token = await isExist.generateToken();

        if (token) {
          res.send({ token: token, state: true });
        }
      } else {
        res.send("sign in failed");
      }
    } else {
      res.send("sign in failed");
    }
  } catch (error) {
    console.log(error.message);
  }
};
export default connectDb(handler);
