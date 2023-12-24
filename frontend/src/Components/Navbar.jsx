import { Link } from "react-router-dom"
import {BsSearch} from 'react-icons/bs';

const Navbar = () => {
    const user= true;
  return (
    <div>
<div className="flex items-center justify-between">
            <h1 className="font-bold md:text-2xl text-xl">BlogApp</h1>
        
            <div className="flex items-center justify-center space-x-1">
                <p><BsSearch/></p>
                <input type="text" placeholder="Search a post here" className="outline-none"/>
            </div>

            <div className="flex justify-center items-center space-x-2 md:space-x-8">
                {user ? <h3><Link to="/write"> Write </Link> </h3> : <h3><Link to="/login" >Login</Link></h3>}
                {user ? <h3><Link to="/profile">Profile</Link></h3> : <h3><Link to="/register">Register</Link></h3>}
            </div>
        </div>
    </div>
  )
}

export default Navbar