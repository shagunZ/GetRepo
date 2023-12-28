'use client'
import React from 'react'
import Video from './video2.mp4';
import './video.css'
export const metadata = {
    title: 'aboutpage',
  }

const Aboutpage = () => {
  return (
    <div className=' video-background'>
      <p>
            GetRepo is an innovative web application built using Next.js, designed to streamline and enhance the GitHub repository exploration experience. This project leverages the power of Next.js, a React-based framework, to create a fast, responsive, and user-friendly interface for navigating GitHub repositories directly.
        </p>
        <video autoPlay loop muted playsInline className='video'>
        
        <source src={Video} type='video/mp4'/>
        Your browser does not support the video tag.
      </video>
      <p className='text-overlay'>
            Get your Repo
        </p>
    </div>
  )
}

export default Aboutpage