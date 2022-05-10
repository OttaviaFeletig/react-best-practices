import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";

const Cleanup = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          { signal: abortController.signal }
        );
        const data = await response.json();
        setLoading(false);
        setPosts(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setLoading(false);
          setError(error);
        }
      }
    };
    setTimeout(() => {
      getData();
    }, 1000);

    return () => {
      abortController.abort();
    };
  }, []);
  console.log("Re-rendering");
  return (
    <div>
      <h1>Cleanup</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error.name}</p>}
      {posts && <Posts posts={posts} />}
    </div>
  );
};

export default Cleanup;
