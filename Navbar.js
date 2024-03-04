import { Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from "../hooks/useAuthContext";


const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
    }
    return (

        <header>

            <nav className="navbar">
                <h3>Blogs</h3>

                <ul>
                    {!user && (
                        <div className="login-register">

                            <li className="register"><Link to='/login'>Log In</Link></li>
                            <li className="register"><Link to='/signup'>Sign Up</Link></li>
                        </div>
                    )}
                    {user && (

                        <div className="loggedIn">

                            <li className="1" ><Link to='/'>Home</Link></li>
                            <li className="2" ><Link to='/add'>Add Item</Link></li>
                            <li className="3" ><Link to='/blogs'>Blogs</Link></li>
                            <span className="4">{user.email}</span>
                            <button className="5" onClick={handleClick}>Log out</button>
                        </div>
                    )}
                </ul>

            </nav>
        </header>



    )
};

export default Navbar; 