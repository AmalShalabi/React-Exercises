import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPot] = useState({});
  const [id,setid]=useState(1);
  const [idFromButtonClick,sedIdFromButtonClick]=useState(1)

  const handleClick=()=>{
    sedIdFromButtonClick(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPot(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
     <button type="button" onClick={handleClick}>Fetch Post</button>
     <div>{post.title}</div>
    </div>
  );
}

export default DataFetching;
