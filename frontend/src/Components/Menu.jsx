

import {Link} from 'react-router-dom';
const Menu = () => {
    const user= false;

  return (
    <div className="bg-black w-[200px] z-10 flex flex-col items-start absolute top-24 right-6 md:right-32 rounded-md p-4 space-y-4">
    {!user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/login">Login</Link></h3>}
    {!user &&<h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/register">Register</Link></h3>}
    {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to={"/profile/"+user._id}>Profile</Link></h3>}
    {user &&<h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/write">Write</Link></h3>}
    {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to={"/myblogs/"+user._id}>My blogs</Link></h3>}
    {user &&<h3  className="text-white text-sm hover:text-gray-500 cursor-pointer">Logout</h3>}

    </div>
  )
}

export default Menu