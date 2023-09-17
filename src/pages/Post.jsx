import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import Loading from '../components/Loading';
import moment from 'moment';

const Post = () => {
  const id = useParams().id
  const Url = import.meta.env.VITE_ROUTE
  const {currentUser} = useContext(AuthContext)
  
  const [post, setPost] = useState(null);
  const [showOptions, setshowOptions] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(null);
  const [refresh, setRefresh] = useState(true);


  const setUp = async () => {
    try {
      const res = await axios.get(`${Url}/posts/${id}`)
      setPost(res.data.post)
      setComments(res.data.postcomments)
    } catch (error) {
      console.log(error)
    }
  }

  const handleShowoptions = (e) => {
    if(showOptions){
      e.target.parentElement.querySelector(".options").classList.add("hidden")
    }else{
      e.target.parentElement.querySelector(".options").classList.remove("hidden")
    }
    setshowOptions(!showOptions)
  }

  const deleteComment = async(e) => {
    e.preventDefault()
    const id = e.target.id
    // console.log(e.target, id)
    try {
      const res = await axios.post(`${Url}/comments/delete/${id}`, {},{
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      // console.log(res)
      toast.success("Comment deleted")
      setRefresh(!refresh)
    } catch (error) {
      console.log(error)
      toast.error("Sorry, something went wrong")
    }
  }

  // console.log(comments)

  const addComment = async(e) => {
    e.preventDefault()
    if(!currentUser) return toast.error("Log in first!")
    if(comment.trim() == "") return toast.error("Can't submit an empty comment")

    try {
      const res = await axios.post(`${Url}/comments?post=${id}`, {comment}, {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      toast.success("You added a comment!")
      setComment("")
      setRefresh(!refresh)
    } catch (error) {
      console.log(error)
      toast.error("sorry something went wrong")
    }
  }



  useEffect(()=>{
    setUp()
  }, [refresh])

  return (
    <>
      <Navbar/>
      <div className='post pt-8 pl-4 pr-4 min-h-screen'>
          {
            post ? 
        <div className="main">
            <div className="image">
              <img src={`${Url}/uploads/${post.pictureURL}`} alt="post image" />
            </div> 
            <div className="postdetails mt-4">
                <div className="userinfo flex gap-3 text-[15px] text-gray-700">
                    <div className="date">{moment(post.createDate).format("MMM Do YY")}</div>
                    <div className="date">-</div>
                    <div className="username">{post.username}</div>
                </div>
                <div className="title font-semibold text-lg mt-4 capitalize">{post.title}</div>
                <div className="content text-lg mt-4 text-gray-500 overflow-x-clip">{post.content}</div>
                <div className="comments text-[15px] mt-8">
                    <div className="capitalize text-gray-700">{comments?.length} comment (s)</div>
                    <hr className='mt-4'/>
                    <div className="cmts mt-4">
                      {comments?.length > 0 ? comments.map((comment, index)=>(
                        <div key={index} className="cmt flex gap-5 mb-4">
                          <div className="image">
                              <img src={`${Url}/uploads/${comment.profilePicture}`} alt="post image" />
                          </div>
                          <div className="commentdetails w-full">
                              <div className="name text-lg capitalize flex justify-between items-center relative">
                                <div className='text-[14px]'>
                                  {comment.username}
                                </div>
                                {
                                  currentUser?.user.ID == comment?.uid &&
                                  <>
                                    <div className='cursor-pointer' onClick={handleShowoptions}>...</div>
                                    <div className='cont'>
                                      <div className={"options hidden"}>
                                        <button onClick={deleteComment} id={comment.ID}>Delete</button>
                                      </div>
                                    </div>
                                  </>
                                }
                              </div>
                              <div className="coment text-[10px] text-gray-500">
                                  <div className="content">{comment.comment}</div>
                              </div>
                          </div>
                        </div>
                      )):
                      <div className=' mt-8 center-items items-center text-gray-500'>Be the first to comment...</div> 
                      }
                    </div>
                    <div className="addcomment mt-8 flex items-center justify-between h-[40px] gap-[.7rem]">
                      <input type="text" onClick={(e)=>!currentUser && toast("You have to log in to comment")} onChange={(e)=>setComment(e.target.value)} value={comment} placeholder='Add a comment...'/>
                      <button onClick={addComment}>Post</button>
                    </div>
                </div>
            </div>

        </div>
            : <Loading/>
          }
      </div>
      <Footer/>
    </>
  )
}

export default Post