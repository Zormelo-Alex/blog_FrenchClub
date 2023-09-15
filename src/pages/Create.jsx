import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {

  const Url = import.meta.env.VITE_ROUTE

  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const [file, setFile] = useState(null);
  const [uploadedImg, setUploadedImg] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  

  const handleImage = (e) => {
    setFile(e.target.files[0])
    setUploadedImg(e.target.files[0])
  }

  const handleClick = async(e) => {
    e.preventDefault();

    const formData = new FormData();

    if(title.trim() == "" || content.trim() == "") return toast.error("All text fields are required!")

    formData.append('image',file) 
    formData.append('title',title) 
    formData.append('content',content) 
    
    try {
      const res = await axios.post(`${Url}/posts/create`, formData, {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      if(res.data == "new record added"){
        navigate("/")
      }else{
        console.log(res)
        toast("Please try again")
      }
    } catch (error) {
      console.log(error)
      toast.error("something went wrong with your request")
    }
  }

  useEffect(()=>{
    if(!currentUser){
      navigate("/")
    }
  }, [])

  return (
    <>
    <ToastContainer/>
    <Navbar/>
    <div className="create min-h-[90vh] pt-8 pl-4 pr-4">
      <div className="form center-items items-center">
        <h2 className='text-2xl font-semibold'>Make a post!</h2>
        <p className='text-center mt-2'>Share your wonderful thoughts and experiences with the world</p>
        <div className='w-full bg-slate-400 rounded-lg mt-4 h-[1px]'></div>
        <form action="" onSubmit={handleClick} className='mt-4 pt-4 pb-4 w-full'>
          <div className="file center-items items-center">
            <label htmlFor="file" className='mb-2'> Add an image to your post</label>
            <input type="file" id="file" accept="Image/*" onChange={handleImage}/>
              {uploadedImg &&
              <div className="border-y-2 border-x-2 p-1 mt-4">
                <img className="h-20 w-28 rounded" src={URL.createObjectURL(uploadedImg)} alt="" />
              </div>
            }
          </div>
          <div className="title center-items items-center mt-8 rounded-md">
            <input type="text" onChange={(e)=> setTitle(e.target.value)} required  placeholder='Enter post title...' className='border rounded-md px-3 py-2 w-full focus:outline-none'/>
          </div>
          <div className="content center-items items-center mt-8 rounded-md">
            <textarea onChange={(e)=> setContent(e.target.value)} required name="" id="" cols="30" rows="10" className='resize-none border rounded-md px-3 py-2 w-full focus:outline-none' placeholder='Enter post content...'></textarea>
          </div>
          <div className="btn center-items items-center mt-10 rounded-md">
            <button className='bg-blue-500 p-2 rounded-md pl-8 pr-8 text-slate-100'>Create</button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Create