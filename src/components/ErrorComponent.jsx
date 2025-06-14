import React from 'react'
import { Link } from 'react-router-dom'

function ErrorComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-[#C778DD]">404</h1>
      <p className="text-white text-2xl mt-4 font-semibold">Page Not Found</p>
      <p className="mt-2 text-[#ABB2BF]">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="w-[10rem] border p-2 mt-6 font-light border-[#C778DD] cursor-pointer text-white hover:text-[#ABB2BF] hover:rounded"
      >
        Go Home
      </Link>
    </div>
  )
}

// mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition

export default ErrorComponent
