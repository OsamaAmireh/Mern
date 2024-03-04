import { createContext, useReducer } from "react"

export const BlogsContext = createContext()

//state initial value is blogs :null
//action is an object from dispatch function that has type payload

export const blogsReducer = (state, action) => {
    switch (action.type) {
        //fetch all blogs
        case 'GET_BLOGS': return {
            blogs: action.payload
        }
        //add new blogs
        case 'CREATE_BLOGS': return {
            //payload array of objects "Blogs"
            //action.payload ->new blog
            //...state.blog -> the previous blogobjects
            //payload the data needed as an array
            blogs: [action.payload, ...state.blogs]
        }
        case 'DELETE_BLOG': return {
            blogs: state.blogs.filter((blog) => blog._id !== action.payload._id)
        }
        case 'UPDATE_BLOG': return {
            blogs: state.blogs.filter((blog) => blog._id !== action.payload._id)
        }

        default: return state;
    }
}

export const BlogsContextProvider = ({ children }) => {
    //similar to use state to update the state value , this reducer function
    //usung dispatch function we pass an object as argument
    const [state, dispatch] = useReducer(blogsReducer, { blogs: null });
    //functions for CRUD operations
    return (
        //this is component we want to wrap the whole app

        <BlogsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BlogsContext.Provider>
    )
}