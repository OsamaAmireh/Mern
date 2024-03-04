import { useEffect } from 'react';
import { useBlogContext } from '../hooks/useBlogContext';
import { useAuthContext } from '../hooks/useAuthContext';



const Home = () => {
    const { blogs, dispatch } = useBlogContext()
    const { user } = useAuthContext()
    useEffect(() => {
        const fetchblogs = async () => {
            const response = await fetch('/api/blogs', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            //all data as json objects
            if (response.ok) {
                dispatch({ type: 'GET_BLOGS', payload: json })
            }
        }
        if (user) {
            fetchblogs()
        }

    }, [dispatch, user])


    return (

        blogs && blogs.map((blog, _id) =>
        (
            <div className="blogs-style">
                <p key={blog._id}></p>
                <h3>{blog.title}</h3>
                <h4>{blog.author}</h4>

            </div>

        ))


        // (<div><BlogForm /></div>)
    )

}
export default Home;