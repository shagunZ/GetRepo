import React from 'react'

export const metadata = {
    title: 'aboutpage',
  }

const Aboutpage = () => {
  return (
    <div className='container'>
        <h1 className='hover:text-blue-600'>About page</h1>
        <p className="text-xs text-blue-700">
            getrepo is an innovative web application built using Next.js, designed to streamline and enhance the GitHub repository exploration experience. This project leverages the power of Next.js, a React-based framework, to create a fast, responsive, and user-friendly interface for navigating GitHub repositories directly.
        </p>
    </div>
  )
}

export default Aboutpage