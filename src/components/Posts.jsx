import React, { Fragment } from "react";

const Posts = ({ posts }) => {
  return posts.map((post) => (
    <Fragment key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </Fragment>
  ));
};

export default Posts;
