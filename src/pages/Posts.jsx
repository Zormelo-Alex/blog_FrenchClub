import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {AiOutlineSearch} from "react-icons/ai"


const Posts = () => {

  const posts = [
    {
      imgUrl: "https://wallpaperaccess.com/full/9070071.png",
      title: "Navigating the Digital Age: Empowering Your Online Presence",
      createDate: "October 4, 2023",
      username: "Zormelo Alex Dodzi",
    },
    {
      imgUrl: "https://wallpaperaccess.com/full/9070119.png",
      title: "The Science of Happiness: Discovering Joy in Everyday Life",
      createDate: "October 4, 2023",
      username: "Ashafa Ahmed",
    },
    {
      imgUrl: "https://wallpaperaccess.com/full/8504301.png",
      title: "Sustainable Living: Redefining Your Eco-Friendly Lifestyle",
      createDate: "October 4, 2023",
      username: "Morrison Jessica",
    },
    {
      imgUrl: "https://wallpaperaccess.com/full/9070106.jpg",
      title: "Beyond Boundaries: Exploring the Beauty of World Travel",
      createDate: "October 4, 2023",
      username: "Normanyo-Grives Etornam",
    },
    {
      imgUrl: "https://wallpaperaccess.com/full/9070100.jpg",
      title: "From Dreams to Reality: Achieving Your Goals with Determination",
      createDate: "October 4, 2023",
      username: "Laurene Adjei",
    },
  ];

  return (
    <>
      <Navbar/>
      <div className="posts pt-8 pl-4 pr-4">
        <div className="search">
          <input type="search" placeholder='Search for a topic...' />
          <AiOutlineSearch/>
        </div>
        <h2 className='text-2xl font-semibold mt-8'>All Posts</h2>
        <div className="allPosts mt-4 flex flex-wrap gap-4 justify-center">
          {posts.map((post, index)=>(
            <div className="singlePost w-[170px] h-[200px] bg-gray-400 relative">
              <div className="image h-full">
                <img src={post.imgUrl} alt="post image" />
              </div>
              <div className="postdetails absolute bottom-[-5rem] p-2">
                <div className="title h-full">
                  <h5 className='text-[15px] text-center flex justify-center items-center h-full'>{post.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Posts