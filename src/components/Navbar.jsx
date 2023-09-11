import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const {currentUser, logout} = useContext(AuthContext)

    const [navOpen, setnavOpen] = useState(false);
    const [profileOpen, setprofileOpen] = useState(false);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);

    const setUp = () => {
        if(currentUser){
            setUsername(currentUser.user.username)
            setEmail(currentUser.user.email)
        }else{
            toast("Join the family! log in or register today!!!")
        }
    }

    const handleLogout = (e) => {
        logout()
        toast("See you soon!")
        setprofileOpen(false)
    }

    useEffect(()=>{
        setUp()
    }, [])

  return (
    <>
    <ToastContainer />
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
            <Link to={"/"}>
                <div className='text-2xl text-slate-700'>Bonjour!</div>
            </Link>
            <button disabled={navOpen || !currentUser} className="profilePic" onClick={()=>setprofileOpen(!profileOpen)}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHx-26qVB4sL3d0S0bA31ronzegMlaIQ_yltFJz9T84teKbKVU9AEIyuRRE6qnyZlBArg&usqp=CAU" alt="img" />
            </button>
            <div className={currentUser && profileOpen ? "open profilePicMove": "closed"}>
                {
                    currentUser &&
                <ul className='center-items items-end'>
                    <li className='text-[15px] text-slate-200 font-semibold mb-4'>{username}</li>
                    <li className='text-[15px] text-slate-200 font-semibold mb-8'>{email}</li>
                    <li onClick={handleLogout} className='text-[15px] text-slate-200 font-semibold cursor-pointer'>Logout</li>
                </ul>
                }
            </div>
        </div>
    </>
  )
}

export default Navbar