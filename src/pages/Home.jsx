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
        </div>
    </>
  )
}

export default Home