import { useAuthContext } from './useAuthContext'
import { useBlogContext } from './useBlogContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: blogsDispatch } = useBlogContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
        blogsDispatch({ type: 'GET_BLOGS', payload: null })
    }

    return { logout }
}