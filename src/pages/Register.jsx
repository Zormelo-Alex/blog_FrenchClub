import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const {register} = useContext(AuthContext)

  const navigate = useNavigate()

  const [username, setusername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);


const handleClick = async(e) => {
  e.preventDefault()
  const res = await register({username, email, password})
  console.log(res)
  if(res.signup){
    navigate("/")
  }else{
    toast.error("sorry something went wrong")
  }
}

  return (
    <>
    <ToastContainer />
      <div className="register">
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="image w-[50px] mb-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZNyjjMkW-S6p5fNu1XY2uWWmc8gKhuMCqNrZJPtdivOULcS1wlYiUWfepj8wYqFMaCw&usqp=CAU" alt="" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <form onSubmit={handleClick}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your username"
                value={username}
                onChange={(e)=>setusername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600 mb-4"
            >
              Register
            </button>
          </form>
          <Link className='text-blue-400' to={"/"}>Go to home</Link>
        </div>
      </div>
      </div>
    </>
  )
}

export default Register