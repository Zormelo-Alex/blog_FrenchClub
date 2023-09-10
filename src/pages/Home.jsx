import React from 'react'
import Navbar from '../components/Navbar'
import {AiOutlineSearch} from "react-icons/ai"

const Home = () => {
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
                <div className="post mt-4">
                    <div className="image">
                        <img src="https://wallpaperaccess.com/full/9070067.png" alt="post image" />
                    </div>
                    <div className="title mt-2">
                        <h5 className='font-semibold text-lg'>Unlocking the Secrets of Creative Inspiration: A Journey into the Artistic Mind</h5>
                    </div>
                    <div className="userinfo flex gap-6 mt-2">
                        <div className="date">October 4, 2023</div>
                        <div className="date">-</div>
                        <div className="username">Zormelo Alex</div>
                    </div>
                </div>
            </div>
            <hr className='mt-8' />
        </div>
    </>
  )
}

export default Home