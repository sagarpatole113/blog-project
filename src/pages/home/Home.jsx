import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import axios from 'axios'
import "./home.css"
import { useLocation } from 'react-router-dom'


export default function Home () {

  const [posts,setPosts] = useState([]);
  const {search} = useLocation();


  useEffect(()=>{
      const fetchPosts = async ()=>{
      const res = await axios.get('/posts'+search)
      setPosts(res.data)
      }
     fetchPosts()
  }, [search] )

  return (
    <>
    <Header/>
    <div className= 'home'>
    <Posts posts={posts} />
    
    </div>
    </>
    
  )
}

