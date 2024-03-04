import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import BlogForm from './components/BlogForm';
import Navbar from './components/Navbar';
//import BlogDetails from './components/BlogDetails';
import Blogs from './pages/Blogs';
import Footer from './components/Footer';
import BlogUpdate from './components/BlogUpdate';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';
import About from './pages/About';

function App() {
  const { user } = useAuthContext();
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to='/About' />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/add' element={<BlogForm />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:id' element={<BlogUpdate />}> </Route>
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />}></Route>
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />}></Route>
            <Route path='*' element={<p> Path not resolved</p>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
