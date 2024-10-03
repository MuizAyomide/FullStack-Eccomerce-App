import userModel from "../models/userModal";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return 
}

//route for user login
const loginUser = async (req,res) => {

}

//user registration

const registerUser =  async (req,res) => {

try {

    const {name,email,password} = req.body;

    //check user already exits
    const exists = await userModel.findOne({email})
    if (exists) {
        return res.json({sucess:false, message:'User already exists'})
        
    }
    // validateting email and password
    if (!validator.isEmail(email)){
        return res.json({sucess:false, message:'Please enter a valid email'})

    }
    if (password.length < 8) {
        return res.json({sucess:false, message:'Please enter a strong password'})

        
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
        name,
        email,
        password: hashedPassword
    })

    const user = await newUser.save()

    // const token = 


    
} catch (error) {
    
}
}

//admin login
const adminLogin = async (req,res) => {

}

export {loginUser,registerUser, adminLogin}