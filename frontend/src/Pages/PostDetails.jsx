import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import Comment from '../Components/Comment'

const PostDetails = () => {
  return (
    <div className="flex flex-col my-10 mx-14">
        <div className="flex justify-between items-center ">
            <h1 className="text-4xl font-bold mb-2">Post Title</h1>
            <div className="flex space-x-4">
                <p><BiEdit/></p>
                <p><MdDelete /></p>
            </div>
        </div>
        <div className="flex text-gray-500 items-center justify-between">
            <p>@authorname</p>
            <div className="flex space-x-4 items-center">
                <p>15:25</p>
                <p>23/12/23</p>
            </div>
        </div>

        <div className="w-full h-[500px] mt-6 flex justify-center items-center">
            <img src="https://imgs.search.brave.com/90FQ0f76aptqH0CCEd12bRpK-yGnO8mb5H5sTgEinWA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tbGxq/Mmo4eHZmbDAuaS5v/cHRpbW9sZS5jb20v/Y2I6akM3ZS4zNzEw/OS93OjE0NTYvaDo5/MDIvcTo5MC9mOmJl/c3QvaHR0cHM6Ly90/aGVtZWlzbGUuY29t/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDUvYmxv/Z2dlci5qcGc" className="h-full w-full  object-cover"/>
        </div>

        <p className="text-gray-800 text-sm mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quam? In quae iste eos expedita natus neque maiores nostrum aspernatur distinctio accusantium odio amet, reprehenderit aliquam ab consequatur eius harum dolor ipsam asperiores repellat quis. Cupiditate porro optio, quas deserunt perferendis rerum quod suscipit nostrum velit, modi pariatur est inventore?</p>

        <div className="flex  space-x-2 mt-4">
            <p className="font-semibold">Categories:</p>
            <p className="px-2 py-1 bg-gray-300 rounded-lg">Tech</p>
            <p className="px-2 py-1 bg-gray-300 rounded-lg">AI</p>
        </div>
        <Comment />

        
            
        </div>

    
  )
}

export default PostDetails