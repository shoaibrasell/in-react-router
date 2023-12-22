import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {``
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h2>This is all of my Posts.{posts.length}</h2>
      <div>
        {
          posts.map(post => <Post 
            key={post.id}
            post={post}
          ></Post>)
        }
      </div>
    </div>
  );
};

export default Posts;