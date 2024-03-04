import { Link } from "react-router-dom";
import { useBlogContext } from "../hooks/useBlogContext";
import { useAuthContext } from "../hooks/useAuthContext"
//import Update from "../pages/Update";
// import BlogUpdate from "./BlogUpdate";
// import BlogForm from "./BlogForm";


const BlogDetails = ({ blog }) => {
    const { dispatch } = useBlogContext()
    const { user } = useAuthContext();


    const haandleClick = async () => {
        if (!user) {
            return
        }
        const response = await fetch('/api/blogs/' + blog._id, { method: 'Delete', headers: { 'Authorization': `Bearer ${user.token}` } })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_BLOG', payload: json })
        }


    }
    const handleClick = async () => {


        const body = JSON.stringify(blog);
        console.log("body", body);
        const response = await fetch("/api/blogs/" + blog._id, {
            method: "put",
            headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}` },
            body: body
        });

        //dispatch the action to update the state with the new data 
        dispatch({ type: 'UPDATE_BLOG', payload: await response.json() })
    };
    return (
        <div className="blog-details">
            <h2 className="card-header">{blog.title}</h2>
            <div className="card-body">
                <p className="card-text">{blog.author}</p>
                <p className="card-text">{blog.content}</p>

                <button onClick={haandleClick} >Delete</button>&nbsp;
                <button onClick={handleClick} ><Link to={`/blogs/${blog._id}`}>Edit Blog</Link></button>
            </div>
        </div>
    )
};

export default BlogDetails; 