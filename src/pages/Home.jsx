import React from 'react'
import Navbar from '../components/Navbar'
import {AiOutlineSearch} from "react-icons/ai"
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {

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
        <div className='home pt-8 pl-4 pr-4'>
            <div className="search">
                <input type="search" placeholder='Search for a topic...' />
                <AiOutlineSearch/>
            </div>
            <div className="topPost mt-8">
                <h2 className='text-2xl font-semibold'>Recent Post</h2>
                <Link to={"/post/2"}>
                    <div className="post mt-4">
                        <div className="image">
                            <img src="https://wallpaperaccess.com/full/9070067.png" alt="post image" />
                        </div>
                        <div className="title mt-2">
                            <h5 className='font-semibold text-lg'>Unlocking the Secrets of Creative Inspiration: A Journey into the Artistic Mind</h5>
                        </div>
                        <div className="userinfo flex gap-3 mt-2 text-gray-500">
                            <div className="date">October 4, 2023</div>
                            <div className="date">-</div>
                            <div className="username">Zormelo Alex Dodzi</div>
                        </div>
                    </div>
                </Link>
            </div>
            <hr className='mt-8' />
            <div className="morePosts mt-8 mb-8">
                <div className="top flex justify-between items-center">
                    <h2 className='text-2xl font-semibold'>More Posts</h2>
                    <Link to={"/all-posts"}>
                        <p className='text-gray-500 capitalize'>see all</p>
                    </Link>
                </div>
                <div className="posts mt-4">
                    {posts.map((post, index)=>(
                        <Link to={`/post/${index}`}>
                            <div className="post flex gap-5 items-center mb-4">
                                <div className="image">
                                    <img src={post.imgUrl} alt="post image" />
                                </div>
                                <div className="postdetails">
                                    <div className="title font-semibold text-lg">{post.title}</div>
                                    <div className="userinfo flex gap-3 text-[10px] text-gray-500">
                                        <div className="date">{post.createDate}</div>
                                        <div className="date">-</div>
                                        <div className="username">{post.username}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home