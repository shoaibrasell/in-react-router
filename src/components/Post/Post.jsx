import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
  const {id, title,body}=post;
  const navigate =useNavigate(); //hook 

  const handleNavigation = () => {
    navigate(`/post/${id}`);
  }

  return (
    <div className='post'>
      <h3>Id: {post.id}</h3>
      <h4>Title: {post.title}+</h4>
      <h5>Body: {post.body}</h5>
      <Link to={`/post/${id}`}>Show Details</Link>
      <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
      <button onClick={handleNavigation}>With Button Handler</button>
    </div>
  );
};

export default Post;