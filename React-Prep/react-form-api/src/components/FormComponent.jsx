import React, { useEffect, useState } from "react";

const FormComponent = () => {
  const [userid, setuserId] = useState();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  const FetchPosts = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (resp.ok) {
        const data = await resp.json();
        setPosts(data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    FetchPosts();
  }, []);

  console.log("posts-data", posts);
  console.log("new-post-data", posts[100]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          //   userid,
          title,
          body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setPosts([...posts, data]);
          //   setuserId("");
          setTitle("");
          setBody("");
          console.log("Post data saved successfully");
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="">
            <label>Body:</label>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default FormComponent;
