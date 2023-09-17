import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import {AiOutlineSearch} from "react-icons/ai"
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import moment from "moment"
import Loading from '../components/Loading';

const Home = () => {

    const Url = import.meta.env.VITE_ROUTE
    const {currentUser} = useContext(AuthContext)

    const [allPosts, setAllPosts] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    // console.log(currentUser)

    const setUp = async() => {
        try {
            const res = await axios.get(`${Url}/posts`)
            const recent = await axios.get(`${Url}/posts/recents`)
              setAllPosts(res.data)
              res.data == "No match found!!!" ? setAllPosts(null) :  setAllPosts(res.data)
              recent.data == "No match found!!!" ? setRecentPosts(null) :  setRecentPosts(recent.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        setUp()
    }, [])
  return (
    <>
        <Navbar/>
        <div className='home min-h-screen pt-8 pl-4 pr-4'>
            <div className="search">
                <input type="search" placeholder='Search for a topic...' />
                <AiOutlineSearch/>
            </div>
            <div className="topPost mt-8">
                <h2 className='text-2xl font-semibold'>Most Recent Post</h2>
                {
                    recentPosts?.length ? recentPosts.map((post, index)=>(
                        <Link key={index} to={`/post/${post.ID}`}>
                            <div className="post mt-4">
                                <div className="image">
                                    <img src={`${Url}/uploads/${post.pictureURL}`} alt="post image" />
                                </div>
                                <div className="title mt-2">
                                    <h5 className='font-semibold text-lg'>{post.title}</h5>
                                </div>
                                <div className="userinfo flex gap-3 mt-2 text-gray-500">
                                    <div className="date">{moment(post.createDate).format("MMMM Do, YY")}</div>
                                    <div className="date">-</div>
                                    <div className="username">{post.username}</div>
                                </div>
                            </div>
                        </Link>
                    )):
                    <Loading/>
                }
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
                    {allPosts?.length > 0 ? allPosts.map((post, index)=>(
                        <Link key={index} to={`/post/${post.ID}`}>
                            <div className="post flex gap-5 items-center mb-4">
                                <div className="image">
                                    <img src={`${Url}/uploads/${post.pictureURL}`} alt="post image" />
                                </div>
                                <div className="postdetails">
                                    <div className="title font-semibold text-lg capitalize">{post.title}</div>
                                    <div className="userinfo flex gap-3 text-[10px] text-gray-500">
                                        <div className="date">{moment(post.createDate).format("MMM Do YY")}</div>
                                        <div className="date">-</div>
                                        <div className="username capitalize">{post.username}</div>
                                    </div>
                                </div>
                            </div>
                        </Link> 
                    )):
                    <Link to={"/create"}>Create a new post</Link>
                }
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home