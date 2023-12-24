import React from 'react';
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const Comment = () => {
  return (
    <div>
        <div className="mt-2 space-y-4">
            <h1 className="text-lg font-semibold mb-4">Comments:</h1>

            <div className="flex flex-col bg-gray-200 rounded-lg p-2">
                <div className="flex justify-between items-center">
                    <p className="font-semibold">@authorname</p>
                    <div className="flex space-x-2 items-center ">
                        <p className='text-gray-500'>11:54</p>
                        <p className='text-gray-500'>23/12/23</p>
                        <p><BiEdit /></p>
                        <p><MdDelete /></p>
                    </div>
                </div>
                <p className="p-2">Nice information</p>
            </div>

            <div className="flex flex-col bg-gray-200 rounded-lg p-2">
                <div className="flex justify-between items-center">
                    <p className="font-semibold">@authorname</p>
                    <div className="flex space-x-2 items-center ">
                        <p className='text-gray-500'>11:54</p>
                        <p className='text-gray-500'>23/12/23</p>
                        <p><BiEdit /></p>
                        <p><MdDelete /></p>
                    </div>
                </div>
                <p className="p-2">Nice information</p>
            </div>

            <div className="flex flex-col bg-gray-200 rounded-lg p-2">
                <div className="flex justify-between items-center">
                    <p className="font-semibold">@authorname</p>
                    <div className="flex space-x-2 items-center ">
                        <p className='text-gray-500'>11:54</p>
                        <p className='text-gray-500'>23/12/23</p>
                        <p><BiEdit /></p>
                        <p><MdDelete /></p>
                    </div>
                </div>
                <p className="p-2">Nice information</p>
            </div>

            <div className="flex justify-between mt-2 space-x-4">
                <input className="w-full border-2 border-gray-400 px-1 rounded-lg" type="text" placeholder="Write a comment"/>
                <button className="outline-0 bg-black px-2 p-1 text-white">Add Comment</button>
            </div>

    </div>
    </div>
  )
}

export default Comment