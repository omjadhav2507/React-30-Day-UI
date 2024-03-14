import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ userData }) {
  return (
    <div>
      <>
        <h2>User Data:</h2>
        <div>
          <p>Name: {userData.login}</p>
          <Link to='/profile'><img src={userData.avatar_url} alt="User Avatar" /></Link>
        </div>
      </>
    </div>
  );
}

export default UserCard;
