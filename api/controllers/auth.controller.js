import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { ErrorHandler } from '../utils/error.js';

export const signUp = async (req, res, next) => {
    const { username, email, password} = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '' ) {
        next(ErrorHandler(400, 'ALl the fields are reqired'));       
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,

    });

    try {
        await newUser.save();
        res.json({message: 'Sign Up is a Sucess'});
    } catch (error) {
        next(error);       
    }

    
}