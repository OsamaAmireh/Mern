const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const blogsRouter = require('./routes/blogs')
const userRouter = require('./routes/user')

//create express app
const app = express();

//to read the data passed in the body of the request (post,put,patch)
app.use(express.json());

mongoose.connect(process.env.DBURI).then(() => {
    console.log("Connected to MongoDB database", process.env.DBURI);
    app.listen(process.env.PORT, () => {
        console.log("Lestining on port ", process.env.PORT);
    })

}).catch((error) => {
    console.log("Error connecting to DB", error);
})

app.use((request, response, next) => {
    console.log(request.method, request.path);
    next();
})

// app.get('/', (request, response) => {
//     response.json({ message: 'Welcome to from server' });
// })

// //pass all request that starts with /blogs to blogsRouter where all requests URL and methods are checked and handled
app.use('/api/blogs', blogsRouter);
app.use('/api/user', userRouter);

// app.post('/add', (request, response) => {
//     console.log(request.body);
// })
