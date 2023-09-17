import React, { useContext, useEffect, useState } from 'react'
import {FiCamera} from "react-icons/fi"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'

const UpdateProfile = () => {

    const {currentUser} = useContext(AuthContext)
    const Url = import.meta.env.VITE_ROUTE
    const navigate = useNavigate()

    const [file, setFile] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [DOB, setDOB] = useState("");
    const [uploadedImg, setUploadedImg] = useState("");
    const [user, setUser] = useState([]);
    

    // console.log(user)

    const setUp = async() => {
        try {
            const res = await axios.get(`${Url}/users/${currentUser.user.ID}`, {
                headers: {
                  Authorization: `Bearer ${currentUser.token}`
                }
              })
            //   console.log(res.data)
              setUser(res.data)
              setDOB(res.data.DOB)
              setUsername(res.data.username)
              setEmail(res.data.email)
        } catch (error) {
            console.log(error)
        }
    }

    const handleImage = (e) => {
        setFile(e.target.files[0])
        setUploadedImg(e.target.files[0])
      }

    const handleUpdate = async(e) => {
        e.preventDefault()
        // console.log(username, email, DOB, file)
        try {
            const formData = new FormData();

            formData.append('image',file) 
            formData.append('username',username) 
            formData.append('email',email) 
            formData.append('DOB',DOB) 
            
            const res = await axios.put(`${Url}/users/update`, formData, {
                headers: {
                Authorization: `Bearer ${currentUser.token}`
                }
            })
            if(res.data == "user updated successfully"){
                toast.success("Profile updated")
                navigate("/")
            }else{
                console.log(res)
                toast("Please try again")
            }
            
        } catch (error) {
            console.log(error)
        }
      }

      useEffect(()=>{
        setUp()
      }, [])
  return (
    <>
    <ToastContainer/>
        <div className="profile">
            <div className="imagebg h-[300px] shadow-lg bg-blue-500 w-full center-items items-center relative">
                <div className="image w-[190px] h-[190px] shadow-xl p-[3px] bg-white rounded-full relative">
                    {user?.pictureURL ? 
                    <img src={ uploadedImg ? URL.createObjectURL(uploadedImg) : `${Url}/uploads/${user?.pictureURL}`} alt="profileImg" />
                    :
                    <img src={ uploadedImg ? URL.createObjectURL(uploadedImg) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHx-26qVB4sL3d0S0bA31ronzegMlaIQ_yltFJz9T84teKbKVU9AEIyuRRE6qnyZlBArg&usqp=CAU"} alt="profileImg" />
                    }
                    <label className='icon absolute bottom-[10px] right-[10px] shadow-xl cursor-pointer bg-white rounded-[50%] p-2' htmlFor="image"><FiCamera/></label>
                    <input className='hidden' onChange={handleImage} type="file" id="image" accept="Image/*" />
                </div>
                <div className="nav p-3 uppercase absolute top-0 text-white flex justify-between w-full">
                    <div className="hm"><Link to={"/"}>Home</Link></div>
                    <div className="hm"><Link to={"/"}>view all posts</Link></div>
                </div>
                <div className="nav p-3 italic absolute bottom-0 text-gray-300 flex justify-between w-full">
                    <div className="hm">Joined {moment(user?.createDate).format("Do MMM, y")}</div>
                </div>
            </div>
            <div className="personal p-6">
                <div className="in mt-4 flex-col flex">
                    <label htmlFor="" className='text-gray-500'>Username</label>
                    <input className=' text-black capitalize text-xl border-b font-semibold py-2 w-full focus:outline-none' onChange={(e)=>setUsername(e.target.value)}  type="text" value={username} />
                </div>
                <div className="in mt-8 flex-col flex">
                    <label htmlFor="" className='text-gray-500'>Email</label>
                    <input className=' text-black capitalize text-xl border-b font-semibold py-2 w-full focus:outline-none' onChange={(e)=>setEmail(e.target.value)}  value={email} type="text"  />
                </div>
                <div className="in mt-8 flex-col flex">
                    <label htmlFor="" className='text-gray-500'>Date of Birth</label>
                    <input className=' text-black capitalize text-xl border-b font-semibold py-2 w-full focus:outline-none' onChange={(e)=>setDOB(e.target.value)} value={DOB} type="date"  />
                </div>
            </div>
            <div className="btn center-items items-center mt-10 rounded-md">
                <button className='bg-blue-500 p-2 rounded-md pl-8 pr-8 text-slate-100' onClick={handleUpdate}>SAVE</button>
            </div>
        </div>
    </>
  )
}

export default UpdateProfile