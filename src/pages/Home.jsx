import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='home pt-4'>
            <div className="search">
                <input type="search" placeholder='Search for a topic...' />
            </div>
        </div>
    </>
  )
}

export default Home