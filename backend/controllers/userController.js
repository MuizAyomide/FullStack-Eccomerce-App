import userModel from "../models/userModels.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
//route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ sucess: false, message: "User does not exists" });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    
  }
};

//user registration

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //check user already exits
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ sucess: false, message: "User already exists" });
    }
    // validateting email and password
    if (!validator.isEmail(email)) {
      return res.json({ sucess: false, message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({
        sucess: false,
        message: "Please enter a strong password",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ seccess: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
