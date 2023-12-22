import React from 'react';
import './FriendDetails.css';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h3>Everything about this person is here.</h3>
      <h4>Name: {friend.name}</h4>
      <p>Phone: {friend.phone}</p>
      <p>Email:{friend.email}</p>
      <p>Address: {friend.address.city}</p>
    </div>
  );
};

export default FriendDetails;