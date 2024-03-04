const { response, request } = require('express');
const blogModel = require('../models/blogModel');
const { default: mongoose } = require('mongoose');


// create blog
const addBlog = async (request, response) => {
    //response.json({ message: 'new Blog should be added' });
    const { title, author, content } = request.body;
    try {
        const user_id = request.user._id
        const blog = await blogModel.create({ title, author, content, user_id });
        response.status(200).json(blog);
    } catch (error) {
        response.status(400).json({ error: error.message });

    }
}

// about page
const getABoutPage = (req, res) => {
    res.send("About Page");
};

const getAllBlogs = (request, response) => {
    //response.json({ message: 'new Blog should be added' });
    const user_id = request.user._id
    blogModel.find({ user_id }).sort({ createdAt: -1 }).then((result) => {
        response.status(200).json(result)
    });
}

const getBlogById = async (request, response) => {
    const id = request.params.id;
    const blog = await blogModel.findById(id);
    response.status(200).json(blog);
}

const deleteBlog = async (request, response) => {
    const id = request.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(404).json({ error: "The used ID is invalid" });
    } else {
        const blog = await blogModel.deleteOne({ _id: id })

        if (!blog) {
            response.status(404).json({ error: "No Blog with this ID was found." });

        } else {
            response.status(200).json(blog);
        }
    }
   
}
const updateBlog = async (request, response) => {
    const id = request.params.id;
    console.log("updated request by id");

    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(404).json({ error: "The used ID is invalid" });
    } else {
        const blog = await blogModel.updateOne({ _id: id }, { ...request.body })

        if (!blog) {
            response.status(404).json({ error: "No Blog with this ID was found." });

        } else {
            response.status(200).json(blog);
        }
    }

}



module.exports = { addBlog, getAllBlogs, getBlogById, deleteBlog, updateBlog, getABoutPage }; 