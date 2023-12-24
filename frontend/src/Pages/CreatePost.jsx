import React, { useState } from 'react';
import {ImCross} from 'react-icons/im'
import ReactQuill from 'react-quill';
import ImageUploader from 'quill-image-uploader'; // Import the image uploader module
import Navbar from '../Components/Navbar';

// Register the image uploader module
ReactQuill.Quill.register('modules/imageUploader', ImageUploader);

const BlogPostEditor = () => {
 const [catg,setCatg] = useState("");
 const [catgs, setCatgs] = useState([]);


 const deleteCategory = (i) =>{
  let updatedcatg = [...catgs];
  updatedcatg.splice(i,1);
  setCatgs(updatedcatg);
 }

 const addcategory = ()=>{
  let updatedcatg = [...catgs];
  updatedcatg.push(catg);
  setCatg("");
  setCatgs(updatedcatg);
 }

  // Define the modules for the Quill editor
  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'], // Include the 'image' option
        ['clean'],
      ],
    }
  };

  return (
   
    <div className='flex flex-col my-10 mx-16'>
        <Navbar />
        <div className='mt-6 space-y-2'>
            <h1 className='text-xl font-bold '>Create a post</h1>
            <input type='text' placeholder='enter the titole of post.....' className='outline-none border-2 w-full p-1'/>
            <input type='file'/> 
        </div>

      <label htmlFor="content" className="block text-sm font-medium text-gray-600 mt-4">
        Content:
      </label>
      <div className="quill-editor-container" style={{ height: '300px' }}>
        <ReactQuill
          id="content"
          // value={content}
          // onChange={setContent}
          className="quill-editor"
          modules={modules}
          placeholder="Write your blog post content"
        />
      </div>

      <div className='flex space-x-2'>
        <input type='text' placeholder='add category' onChange={(e) =>{setCatg(e.target.value)}} className='border-2 border-black p-1 rounded-lg'/>
        <button onClick={addcategory} className='rounded-xl px-2 py-1 bg-black text-white p-1'>Add</button>
      </div>
     
     <div className='flex space-x-2 mt-4 items-center'>
      <p>Categories :</p>
      {/* Map through each category and display it */}
      {catgs?.map((c,i) =>(
        <div key={i} className=' mr-4 flex justify-center items-center space-x-2 bg-gray-300 px-2 py-1 rounded-full'>
          <p >{c}</p>
          <p onClick={()=>deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
          </div>
      ))}
      </div>
      <button className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>

    </div>
    
  );
};

export default BlogPostEditor;
