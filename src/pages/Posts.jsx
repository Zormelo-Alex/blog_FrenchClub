import React from 'react'

const Posts = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-semibold">Welcome to Our Website!</h1>
      <p className="mt-4">Click below to go to the home page:</p>
      <a href="/" className="mt-2 text-blue-500 hover:underline">
        Go to Home
      </a>
    </div>
  )
}

export default Posts