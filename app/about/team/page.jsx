'use client';
import { useState,useEffect } from 'react';
import React from 'react'
import LoadingPage from '@/app/loading';
import Link from "next/link";
const Teampage = () => {
  const [courses,setCourses] = useState([]);
  const [loading,setLoading]= useState(true);


  useEffect(()=>{
    const fetchCourses  = async()=>{
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data); 
      console.log("coursess",data)
      setLoading(false);
    }
    fetchCourses();
  },[]);

  if(loading){
    return <LoadingPage/>
  }


  return (
    <div className='flex'>
        {courses.map((course)=>(
                <li key={course.id} className="videocard">
                    <iframe
        width="660"
        height="350"
        src={`https://www.youtube.com/embed/${course.videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
                </li>
            ))}    
    </div>
  )
}

export default Teampage