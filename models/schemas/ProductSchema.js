import mongoose from 'mongoose'
import {Schema} from 'mongoose'

const ProductSchema = new Schema({
    id:{
        type: Number,
        required: [true,'ID is required']
    },
    title:{
        type: String,
        required: [true,'Title is required']
    },
    price:{
        type: Number,
        required: [true, 'Price is required']
    },
    supplier:{
        type: String,
        required: [true, 'Supplier is required']
    },
    img:{
        type: String, 
    }



})

export default ProductSchema