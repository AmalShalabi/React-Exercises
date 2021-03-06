import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts,setPots]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res=>{
                console.log(res);
                setPots(res.data);
            }).catch(err=>{
                console.log(err)
            })
    },[])
  return (
    <div>
        <ul>
            {
posts.map(post =><li key={post.id}>{post.title}</li>)            }
        </ul>
    </div>
  )
}

export default DataFetching