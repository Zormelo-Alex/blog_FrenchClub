import React from 'react'

const EditPost = () => {
  return (
    <>
    <Navbar/>
    <div className="create min-h-[90vh] pt-8 pl-4 pr-4">
      <div className="form center-items items-center">
        <h2 className='text-2xl font-semibold'>Make a post!</h2>
        <p className='text-center mt-2'>Share your wonderful thoughts and experiences with the world</p>
        <div className='w-full bg-slate-400 rounded-lg mt-4 h-[1px]'></div>
        <form action="" className='mt-4 pt-4 pb-4 w-full'>
          <div className="file center-items items-center">
            <label htmlFor="file" className='mb-2'> Add an image to your post</label>
            <input type="file" id="file" accept="Image/*" onChange={handleImage}/>
              {uploadedImg &&
              <div className="border-y-2 border-x-2 p-1 mt-4">
                <img className="h-20 w-28 rounded" src={URL.createObjectURL(uploadedImg)} alt="" />
              </div>
            }
          </div>
          <div className="title center-items items-center mt-8 rounded-md">
            <input type="text"  placeholder='Enter post title...' className='border rounded-md px-3 py-2 w-full focus:outline-none'/>
          </div>
          <div className="content center-items items-center mt-8 rounded-md">
            <textarea name="" id="" cols="30" rows="10" className='resize-none border rounded-md px-3 py-2 w-full focus:outline-none' placeholder='Enter post content...'></textarea>
          </div>
          <div className="btn center-items items-center mt-10 rounded-md">
            <button className='bg-slate-500 p-2 rounded-md pl-8 pr-8 text-slate-300'>Create!</button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default EditPost