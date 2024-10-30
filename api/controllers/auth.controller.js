import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'
import { errorHandeler } from '../utils/error.js';
export const signup = async(req, res) =>{
    const {username, email, password} = req.body;

    if (!username||!email||!password||username===''||email===''||password==='') {
        next(errorHandeler(400, 'All fields are required'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password,
    });

    try{
         await newUser.save();
         res.json('signup sucessful' );
    } catch(error){
        res.status(500).json({message: error.message});
    }

};