import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <><div className="flex items-center justify-between m-5 p-8">
    <h1 className="font-bold md:text-2xl text-xl"><Link to="/">BlogApp</Link></h1>
    <h3 className='text-black font-semibold'><Link to="/register">Register</Link></h3>
    </div>
    <div className='flex justify-center items-center h-[65vh]  m-12'>
        <div className='flex flex-col space-y-4 md:w-[25%]'>
            <h1 className='font-bold text-xl text-center'>Create your account</h1>
            <input type='text' className='w-full border-2 border-black outline-0 p-1' placeholder='Enter your username' />
            <input type='text' className='w-full border-2 border-black outline-0 p-1' placeholder='Enter your email' />
            <input type='password' className='w-full border-2 border-black outline-0 p-1' placeholder='Enter your password' />
            <button className='bg-black p-3 rounded-lg text-white'>Register</button>
            <div className='flex items-center justify-center space-x-1'>
                <p className='text-sm'>Already have an account</p>
                <span>?</span>
                <h2 className='text-gray-500 hover:text-black'><Link to="/login">Login</Link></h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register