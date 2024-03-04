// import React, { useState, useEffect } from "react";
// import { useBlogContext } from "../hooks/useBlogContext";
// import { useParams } from "react-router-dom";
// import axios from "axios"



// const BlogUpdate = () => {

//     const { dispatch } = useBlogContext();
//     // Update  the blog post state with a useState hook. We will pass an empty object as our initial value, since we don't have any data yet

//     // State for the blog post title and content.  
//     const [title, setTitle] = useState("");
//     const [content, setContent] = useState("");
//     const [author, setAuthor] = useState("");
//     const [error, setError] = useState(null);
//     const { id } = useParams();
//     useEffect(() => {
//         axios.get('/api/blogs/' + id)
//             .then((response) => {
//                 setAuthor(response.author);
//                 setTitle(response.title);
//                 setContent(response.content);
//             }).catch((error) => {
//                 console.log(error);
//             })
//     })
//     const handleSubmit = async (e) => {
//         //prevent Defult to retain data
//         e.preventDefault();
//         const blog = { title, author, content };
//         axios.put(`/api/blogs/${id}`, blog).then((response) => {
//             if (!response.success) {
//                 setError(response.message)
//             } else {
//                 dispatch({ type: 'UPDATE_POST', payload: response.blog });
//                 window.location.href = "/dashboard";
//             }
//         })
//         const json = await response.json(blog);
//         if (!response.ok) {
//             setError(json.error)
//         }

//     }
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
// import { useSnackbar } from 'notistack'


const BlogUpdate = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useAuthContext()
    const navigate = useNavigate();
    // const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();

    useEffect(() => {

        setLoading(true);
        axios.get(`/api/blogs/${id}`, { headers: { 'Authorization': `Bearer ${user.token}` } })
            .then((response) => {
                setTitle(response.data.title);
                setAuthor(response.data.author);
                setContent(response.data.content);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                console.log(error);

            })

    }, [id, user])

    const handleSubmit = () => {
        if (!user) {
            alert('you must be logged in')
            return
        }
        const data = {
            title,
            author,
            content,
        };
        setLoading(true);
        axios.put(`/api/blogs/${id}`, { headers: { 'Authorization': `Bearer ${user.token}` } }, data).then(() => {
            setLoading(false);
            // enqueueSnackbar("Book Updated successfully", { variant: 'success' });
            navigate('/');
        }).catch((error) => {
            setLoading(false);
            // enqueueSnackbar("Error", { variant: 'error' });

            // alert('An error Happened');
            console.log(error);
        })
    };


    return (
        loading ? <div> Loading... </div> :

            <form className="create"  >
                <h3> Edit item</h3>
                <label> Blog title </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                <label> Blog Author </label>
                <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} />
                <label> Blog Content </label>
                <textarea type="texterea" onChange={(e) => setContent(e.target.value)} value={content} />

                <button type="submit" onClick={handleSubmit} > Save Blog</button>

                {/* {error && <div className='error'> {error} </div>} */}
            </form>
    );
}

export default BlogUpdate