
import React from 'react';

function UserCard({ userData }) {
  return (
    <div>
      
        <>
          <h2>User Data:</h2>
          <div>
            <p>Login: {userData.login}</p>
            <p>Name: {userData.name}</p>
            <img src={userData.avatar_url} alt="User Avatar" />
          </div>
        </>
      
    </div>
  );
}

export default UserCard;
