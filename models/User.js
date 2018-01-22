import mongoose from 'mongoose'
import {Schema} from 'mongoose'
import ProductSchema from './schemas/ProductSchema'

const UserSchema = new Schema({
    userName:{
        type: String,
        required: [true,'Name is required'],
        unique: [true,'Username is taken']
    },
 
    password:{
        type: String,
        required: [true,'Password is required']
    },
    first:{
        type: String,
        required: [true,'first name is required']

    },
    last:{
        type: String,
        required: [true,'last name is required']

    },
    userType:{
        type: String,
        required: [true,'user type is required']

    },

    products: []})

const User = mongoose.model('user',UserSchema)
export default User