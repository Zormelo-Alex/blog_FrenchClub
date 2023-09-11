import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Post = () => {
  const comments = [
    {
      userImg: "https://wallpaperaccess.com/full/9070106.jpg",
      username: "Kpeglo Wonder",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum beatae debitis quis consequatur saepe id.",
    },
    {
      userImg: "https://wallpaperaccess.com/full/9070106.jpg",
      username: "Kpeglo Wonder",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum beatae debitis quis consequatur saepe id.",
    },
    {
      userImg: "https://wallpaperaccess.com/full/9070106.jpg",
      username: "Kpeglo Wonder",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum beatae debitis quis consequatur saepe id.",
    },
    {
      userImg: "https://wallpaperaccess.com/full/9070106.jpg",
      username: "Kpeglo Wonder",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum beatae debitis quis consequatur saepe id.",
    },
    {
      userImg: "https://wallpaperaccess.com/full/9070106.jpg",
      username: "Kpeglo Wonder",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum beatae debitis quis consequatur saepe id.",
    },
    {
      userImg: "https://wallpaperaccess.com/full/9070106.jpg",
      username: "Kpeglo Wonder",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum beatae debitis quis consequatur saepe id.",
    },
    {
      userImg: "https://wallpaperaccess.com/full/9070106.jpg",
      username: "Kpeglo Wonder",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum beatae debitis quis consequatur saepe id.",
    },
    {
      userImg: "https://wallpaperaccess.com/full/9070106.jpg",
      username: "Kpeglo Wonder",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum beatae debitis quis consequatur saepe id.",
    },
    {
      userImg: "https://wallpaperaccess.com/full/9070106.jpg",
      username: "Kpeglo Wonder",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum beatae debitis quis consequatur saepe id.",
    },
  ]

  const [showOptions, setshowOptions] = useState(false);
  return (
    <>
      <Navbar/>
      <div className='post pt-8 pl-4 pr-4'>
        <div className="main">
          <div className="image">
            <img src="https://wallpaperaccess.com/full/9070071.png" alt="post image" />
          </div>
          <div className="postdetails mt-4">
              <div className="userinfo flex gap-3 text-[15px] text-gray-700">
                  <div className="date">October 4, 2023</div>
                  <div className="date">-</div>
                  <div className="username">Zormelo Alex Dodzi</div>
              </div>
              <div className="title font-semibold text-lg mt-4">Navigating the Digital Age: Empowering Your Online Presence</div>
              <div className="content text-lg mt-4 text-gray-500">In today's rapidly evolving digital landscape, establishing a robust online presence has become essential for individuals and businesses alike. The internet offers a vast platform for connecting with a global audience, sharing ideas, promoting products or services, and building a personal or brand identity. To thrive in this digital age, it's crucial to understand the dynamics of the online world and how to harness its potential effectively.</div>
              <div className="comments text-[15px] mt-8">
                  <div className="capitalize">2,023 comments</div>
                  <hr className='mt-4'/>
                  <div className="cmts mt-4">
                    {comments.map((comment, index)=>(
                      <div className="cmt flex gap-5 mb-4">
                        <div className="image">
                            <img src={comment.userImg} alt="post image" />
                        </div>
                        <div className="commentdetails w-full">
                            <div className="name text-lg capitalize flex justify-between items-center relative">
                              <div className='text-[14px]'>
                                {comment.username}
                              </div>
                              <div className='cursor-pointer' onClick={()=>setshowOptions(!showOptions)}>...</div>
                              <div className={showOptions? "block options" : "hidden"}>
                                <button>Delete</button>
                              </div>
                              </div>
                            <div className="coment text-[10px] text-gray-500">
                                <div className="content">{comment.comment}</div>
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="addcomment mt-8 flex items-center justify-between h-[40px] gap-[.7rem]">
                    <input type="text" placeholder='Add a comment...'/>
                    <button>Post</button>
                  </div>
              </div>
           </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Post