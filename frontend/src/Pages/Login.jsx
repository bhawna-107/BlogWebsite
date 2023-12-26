import React , {useContext, useState} from 'react'
import axios from 'axios';
import {url} from '../url';
import { Link, useNavigate,  } from 'react-router-dom'
import { UserContext } from '../context/usercontext';

const Login = () => {

  const {setUser} = useContext(UserContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [err, setErr] = useState(false);
 const navigate = useNavigate();
  
  const handleLogin = async() =>{
    try{
      const res= await axios.post(url+ "/api/auth/login", {email,password}, {withCredentials:true});
      setUser(res.data);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setErr(false);
      navigate("/");
      console.log(res.data);
    }
    catch(err){
      setErr(true);
      console.error(err);

    }
  }
  return (
    <><div className="flex items-center justify-between m-5 p-8">
    <h1 className="font-bold md:text-2xl text-xl"><Link to="/">BlogApp</Link></h1>
    <h3 className='text-black font-semibold'><Link to="/register">Register</Link></h3>
    </div>
 
    <div className='flex justify-center items-center h-[65vh]  m-8'>
        <div className='flex flex-col space-y-4 md:w-[25%]'>
            <h1 className='font-bold text-xl text-center'>Login to your account</h1>
            <input onChange= {(e) =>setEmail(e.target.value)} type='email' className='w-full border-2 border-black outline-0 p-1' placeholder='Enter your email' />
            <input onChange= {(e) =>setPassword(e.target.value)} type='password' className='w-full border-2 border-black outline-0 p-1' placeholder='Enter your password' />
            <button onClick = {handleLogin} className='bg-black p-3 rounded-lg text-white'>Login</button>
            {err && <h3 className='text-red-500 text-sm'>Something went wrong</h3>}

            <div className='flex items-center justify-center space-x-1'>
                <p className='text-sm'>New Here</p>
                <span>?</span>
                <h2 className='text-gray-500 hover:text-black'><Link to="/register">Register</Link></h2>
            </div>
        </div>

    </div>
    </>
  )
}

export default Login