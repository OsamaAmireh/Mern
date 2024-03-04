import { useEffect } from 'react';
import BlogDetails from "../components/BlogDetails";
//import BlogForm from "../components/BlogForm";
// import Navbar from "../components/Navbar";
import { useBlogContext } from '../hooks/useBlogContext';
import { useAuthContext } from '../hooks/useAuthContext';



const Blogs = () => {
    const { blogs, dispatch } = useBlogContext()
    const { user } = useAuthContext();
    useEffect(() => {

        const fetchblogs = async () => {
            const response = await fetch('/api/blogs/', { headers: { 'Authorization': `Bearer ${user.token}` } })
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

    // // useEffect(() => {
    // //     fetch('/blogs/allBlogs')
    // //         .then(response => response.json())
    // //         .then(blogs => setBlogs(blogs))
    // //         .catch(error => console.log(error));
    // //     // const fetchblogs = async () => {
    // //     //     const response = await fetch('/blogs/allBlogs')
    // //     //     const json = await response.json()
    // //     //     if (response.ok) {
    // //     //         setBlogs({ type: 'SET_BLOGS', payload: json });
    // //     //     }
    // //     // }
    // //     // fetchblogs()
    // // }

    //     , [])
    return (
        <div className="Home">
            {/* <Navbar /> */}
            {/* <h1>Welcome to our website!</h1>
        <p>This is a simple project created by the team of students at UT Austin's Full Stack Web Development Bootcamp. The purpose of this site is to provide an easy-
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non urna nec nibh tempus sollicitudin ut sed
        </p>
        <h2>Hello from World </h2>
        <div className="blogs-style">
            {blogs && blogs.map((blog) =>
                (<p key={blog._id}>{blog.title}</p>))}</div> */}
            <div >
                <div className="item">
                    {blogs && blogs.map((blog) => (
                        <BlogDetails key={blog._id} blog={blog} />


                    ))}

                </div>
            </div>

        </div>
    )
}
export default Blogs;