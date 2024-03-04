const express = require('express');
//const BlogsModel = require('../models/blogModel');
const router = express.Router();

const { getAllBlogs, addBlog, deleteBlog, updateBlog, getBlogById, getABoutPage } = require('../controllers/blogController');
const requireAuth = require('../middleware/requireAuth')
//const {addBlog} = require('../controllers/blogController');

// router.get('/', (request, response) => {
//     response.json({ message: 'Welcome to the API from blogs' });
// })

//require auth for all blogs routes
router.use(requireAuth);

router.get('/', getAllBlogs)

router.get('/', getABoutPage)

router.get('/:id', getBlogById)

router.post('/', addBlog)

router.delete('/:id', deleteBlog)

router.put('/:id', updateBlog)

// router.patch('/updateBlog/:id', (request, response) => {
//     const id = request.params.id;
//     response.json({ message: 'Blog should be updated By id : ' + id + ' using patch ' });
// })

module.exports = router;