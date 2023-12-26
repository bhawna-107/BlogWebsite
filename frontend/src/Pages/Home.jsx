import React, { useContext, useEffect, useState,  } from 'react'
import HomePost from '../Components/HomePost'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import axios from 'axios'
import { url } from '../url'
import {Link, useLocation} from 'react-router-dom';
import Loader from '../components/Loader'
import { UserContext } from '../context/usercontext'


const Home = () => {
  const {user} = useContext(UserContext);
  console.log(user);
  const {search} = useLocation();
  console.log(search);

  const [posts, setPosts] = useState([]);
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)

  useEffect(() =>{
    fetchPosts();
  }, [search])

  const fetchPosts = async() =>{
    setLoader(true)
    try{
      const encodedSearch = encodeURIComponent(search.trim());
      const res = await axios.get(`${url}/api/posts/?search=${encodedSearch}`);

      

      // const res = await axios.get(url + "/api/posts/" + search)
      console.log(res.data);
      setPosts(res.data);
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false)
      
    }
    catch(err){
      console.error(err);
    }
  }
  return (
    <div className='mx-8 my-14'>
    <Navbar />
    {loader ? (
      <div className="h-[40vh] flex justify-center items-center">
        <Loader />
      </div>
    ) : !noResults ? (
      <div>
        {posts.map((post) => (
          <Link to={user ? `/posts/post/${post._id}` : "/login"} key={post._id}>
            <HomePost post={post} />
          </Link>
        ))}
      </div>
    ) : (
      <h3 className="text-center font-bold mt-16">No posts available</h3>
    )}
    <Footer />
  </div>
    // <div className='mx-8 my-14'>
    //   <Navbar />
    //   {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults? 
    //     posts.map((post) =>(
    //       <div>
    //       <Link to={user? `/posts/post${post._id}`: "/login"}>
    //       <HomePost key={post._id} post = {post} /> 
    //       </Link>
    //   ))}: <h3 className="text-center font-bold mt-16">No posts available</h3>}
     
    //       </div>
        
    //   <Footer />
    // </div>
  )
}

export default Home