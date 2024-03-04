const mongoose = require('mongoose');
//create schema
const Schema = mongoose.Schema;

const BlogSchema = new Schema({

    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    user_id: { type: String, required: true }

}, { timestamps: true });

//const model=mongoose.model(Blogs,BlogSchema)
module.exports = mongoose.model("Blogs", BlogSchema);  //export the model</
