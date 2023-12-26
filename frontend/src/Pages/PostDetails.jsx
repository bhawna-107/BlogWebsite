import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import Comment from '../Components/Comment'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../url';

const PostDetails = () => {
    const [post,setPost] = useState({});
    const postId = useParams().id;


    const fetchPost = async() =>{
        try{
            const res=  await axios.get(url+ "/api/posts/"+postId)
            
            setPost(res.data);

        }catch(err){
            console.error(err);
        }
    }

    useEffect(() =>{
        fetchPost();

    }, [postId])
  return (
    <div className="flex flex-col my-10 mx-14">
        <div className="flex justify-between items-center ">
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <div className="flex space-x-4">
                <p><BiEdit/></p>
                <p><MdDelete /></p>
            </div>
        </div>
        <div className="flex text-gray-500 items-center justify-between">
            <p>{post.username}</p>
            <div className="flex space-x-4 items-center">
            <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
            </div>
        </div>

        <div className="w-full h-[500px] mt-6 flex justify-center items-center">
            <img src={post.photo} className="h-full w-full  object-cover"/>
        </div>

        <p className="text-gray-800 text-sm mt-8">{post.desc}</p>

        <div className="flex  space-x-2 mt-4">
            <p className="font-semibold">Categories:</p>
            <div className="flex justify-center items-center space-x-2">
          {post.categories?.map((c,i)=>(
            <>
            <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">{c}</div>
            </>
            
          ))}
            
          </div>
        </div>
        <Comment />

        
            
        </div>

    
  )
}

export default PostDetails