'use client';
import { useState,useEffect } from 'react';
import React from 'react'
import LoadingPage from './loading';
import Link from 'next/link'
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch';
const Homepage = () => {
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
    <div>
      <h1>Welcome</h1>
      <CourseSearch getSearchResults={(results)=>setCourses(results)}/>
      <Courses courses={courses}/>
    </div>
  )
}

export default Homepage