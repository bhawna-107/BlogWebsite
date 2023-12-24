import React from 'react'
import ProfilePost from '../Components/ProfilePost'
import Navbar from '../Components/Navbar'

const Profile = () => {
  return (
    <div className='px-8 md:px-[100px]'>
        <Navbar />
        <div className='flex md:flex-row flex-col-reverse m-4'>
       
       <div className='flex flex-col md:w-[70%]'>
           <ProfilePost />
           <ProfilePost />
           <ProfilePost />
           <ProfilePost /> 
       </div>

       <div className='md:sticky md:top-12 flex flex-col space-y-4 md:w-[30%] w-[50%] '>
           <h1 className='
           font-bold text-lg'>Profile</h1>

           <div className='flex flex-col space-y-2'>
               <input className='border-2 rounded-lg p-1' type='text' placeholder='username' />
               <input className='border-2 rounded-lg p-1'type='email' placeholder='email'/>
               <input className='border-2 rounded-lg p-1'type='password' placeholder='password' />
           </div>
           <div className='flex space-x-4'>
           <button className="p-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py">update</button>
           <button className="p-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py">Delete</button>

           </div>
           


       </div>

   </div>
    </div>
    
  )
}

export default Profile