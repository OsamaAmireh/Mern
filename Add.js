import { useEffect } from 'react';
import BlogForm from "../components/BlogForm";
import { useBlogContext } from '../hooks/useBlogContext';

const Add = () => {
    const { blogs, dispatch } = useBlogContext()
    useEffect(() => {
        const fetchblogs = async () => {
            const response = await fetch('/api/blogs')
            const json = await response.json()
            //all data as json objects
            if (response.ok) {
                dispatch({ type: 'GET_BLOGS', payload: json })
            }
        }
        fetchblogs()
    })
    return (
        <div className="Home">
            <div className="blogs">
                <div className="item">
                    <BlogForm />
                </div>
            </div>
        </div>)
}
export default Add;