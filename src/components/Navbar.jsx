import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [navOpen, setnavOpen] = useState(false);
    const [profileOpen, setprofileOpen] = useState(false);

  return (
    <>
        <div className='navbar relative items-center flex justify-between mr-2 ml-2 pl-2 pr-2'>
            <button className='burger' disabled={profileOpen} onClick={()=>setnavOpen(!navOpen)}>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
            </button>
            <div className={navOpen? "open": "closed"}>
                <ul className='center-items'>
                    <li className='text-lg text-slate-200 font-semibold mb-4'><Link to={"/login"}>Login</Link></li>
                    <li className='text-lg text-slate-200 font-semibold mb-4'><Link to={"/register"}>SignUp</Link></li>
                    <li className='text-lg text-slate-200 font-semibold'><Link to={"/create"}>Create Post</Link></li>
                </ul>
            </div>
            <div className='text-2xl text-slate-700'>Bonjour!</div>
            <button disabled={navOpen} className="profilePic" onClick={()=>setprofileOpen(!profileOpen)}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHx-26qVB4sL3d0S0bA31ronzegMlaIQ_yltFJz9T84teKbKVU9AEIyuRRE6qnyZlBArg&usqp=CAU" alt="img" />
            </button>
            <div className={profileOpen ? "open profilePicMove": "closed"}>
                <ul className='center-items items-end'>
                    <li className='text-[15px] text-slate-200 font-semibold mb-4'>Alexander Dodzi Zormelo</li>
                    <li className='text-[15px] text-slate-200 font-semibold mb-8'>alexzormelo9@gmail.com</li>
                    <li className='text-[15px] text-slate-200 font-semibold'>Logout</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar