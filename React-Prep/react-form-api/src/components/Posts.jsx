import React, { useEffect, useState } from "react";

const Posts = () => {
  const [postsData, setPostsData] = useState([]);
  const [error, setError] = useState("");

  const FetchPostsData = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (resp.ok) {
        // converting resp into json
        const data = await resp.json();
        setPostsData(data);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    FetchPostsData();
  }, []);

  console.log(postsData);
  
  return (
    <>
      <div>Posts</div>
      {error && <p>{error}</p>}

      {postsData.length> 0 && postsData ? (
        <>
            <div className="">
                <ul>
                {postsData.map((post, index) => (
                    <div className="">
                        <li>{post.userId}</li> 
                        <li> {post.title} </li>
                        <li>{post.body}</li>
                    </div>
                ))}
                </ul>
            </div>
        </>
      ):(
        <>
            <p>No Data Found</p>
        </>
      )
      }
    </>
  );
};

export default Posts;
