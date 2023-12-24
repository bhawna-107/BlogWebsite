import React from 'react'
import HomePost from '../Components/HomePost'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div className='mx-8 my-14'>
      <Navbar />
      <HomePost />
      <HomePost />
      <HomePost />
      <HomePost />
      <HomePost />
      <Footer />
    </div>
  )
}

export default Home