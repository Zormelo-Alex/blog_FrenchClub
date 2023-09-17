import React from 'react'
import {FiCamera} from "react-icons/fi"

const UpdateProfile = () => {
  return (
    <>
        <div className="profile">
            <div className="imagebg h-[340px] bg-blue-500 w-full center-items items-center">
                <div className="image w-[150px] h-[150px] shadow-xl p-[3px] bg-white rounded-full relative">
                    <img src="https://wallpaperaccess.com/full/10536532.jpg" alt="profileImg" />
                    <div className="icon absolute bottom-[10px] right-0 cursor-pointer bg-white rounded-[50%] p-2"><FiCamera/></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UpdateProfile