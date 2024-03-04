import { BlogsContext } from "../context/BlogContext";
import { useContext } from "react";


export const useBlogContext = () => {
    const context = useContext(BlogsContext);
    if (!context) {
        throw Error('useBlogsContext must be used inside a BlogContextProvider')
    }
    return context
}