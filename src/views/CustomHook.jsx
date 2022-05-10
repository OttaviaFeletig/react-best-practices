import React from "react";
import Posts from "../components/Posts";
import useFetch from "../customHooks/useFetch";

const CustomHook = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      <h1>Cleanup</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error.name}</p>}
      {posts && <Posts posts={posts} />}
    </div>
  );
};

export default CustomHook;
