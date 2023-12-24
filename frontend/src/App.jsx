import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Pages/Login';
import Register from './Pages/Register';
import {Routes, Route} from 'react-router-dom';
import PostDetails from './Pages/PostDetails';
import CreatePost from './Pages/CreatePost';
import EditPost from './Pages/EditPost';
import Profile from './Pages/Profile';

function App() {

  return (
    <div>
      
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
          <Route exact path="/posts/post/:id" element={<PostDetails/>}></Route>
          <Route exact path="/write" element={<CreatePost />}></Route>
          <Route exact path="/edit/:id" element={<EditPost />}></Route>
          <Route exact path="/profile/:id" element={<Profile />}></Route>
        </Routes>

    </div>
  )
}

export default App
