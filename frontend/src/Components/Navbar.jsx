import { Link , useNavigate} from "react-router-dom"
import {BsSearch} from 'react-icons/bs';
import {FaBars} from 'react-icons/fa';
import Menu from "./Menu"
import { useContext, useState } from "react"
import { UserContext } from "../context/usercontext";

const Navbar = () => {
  const [menu,setMenu]=useState(false)  ;
  const [prompt,setPrompt] = useState("");
  console.log(prompt);
  const navigate = useNavigate();
  
  const showMenu=()=>{
    setMenu(!menu)
  }

  const {user}= useContext(UserContext);
  console.log(user);

  return (
    <div>
<div className="flex items-center justify-between">
            <h1 className="font-bold md:text-2xl text-xl">BlogApp</h1>
        
            <div className="flex items-center justify-center space-x-1">
                <p onClick = {() => navigate( prompt? "?search= "+prompt :navigate("/"))}className="cursor-pointer"><BsSearch/></p>
                <input onChange = {(e) => setPrompt(e.target.value)} type="text" placeholder="Search a post here" className="outline-none"/>
            </div>

            {/* <div className="flex justify-center items-center space-x-2 md:space-x-8">
                {user ? <h3><Link to="/write"> Write </Link> </h3> : <h3><Link to="/login" >Login</Link></h3>}
                {user ? <h3><Link to="/profile">Profile</Link></h3> : <h3><Link to="/register">Register</Link></h3>}
            </div> */}

<div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
      {user? <h3><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
      {user? <div onClick={showMenu}>
        <p className="cursor-pointer relative"><FaBars/></p>
        {menu && <Menu/>}
      </div>:<h3><Link to="/register">Register</Link></h3>}
    </div>
    <div onClick={showMenu} className="md:hidden text-lg">
      <p className="cursor-pointer relative"><FaBars/></p>
      {menu && <Menu/>}
    </div>
        </div>
    </div>
  )
}

export default Navbar