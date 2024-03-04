import { useState } from "react";
import { useBlogContext } from "../hooks/useBlogContext";
import { useAuthContext } from "../hooks/useAuthContext";




const BlogForm = () => {

    const { dispatch } = useBlogContext();
    //create a state for each form input field
    const { user } = useAuthContext()
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        //prevent Defult to retain data
        e.preventDefault();
        if (!user) {
            setError('you must be logged in')
            return
        }
        const blog = { title, author, content };
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setAuthor('')
            setContent('')
            setError(null)
            dispatch({ type: 'CREATE_BLOG', payload: json.data })

        }
    }


    return (
        <form className="create" onSubmit={handleSubmit} >
            <h3> Add a new item</h3>
            <label> Blog title </label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            <label> Blog Author </label>
            <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} />
            <label> Blog Content </label>
            <textarea type="textarea" className="textarea" onChange={(e) => setContent(e.target.value)} value={content} />

            <button type="submit" > Add Blog</button>

            {error && <div className='error'> {error} </div>}
        </form>
    )
}

export default BlogForm