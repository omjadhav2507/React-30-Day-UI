import React from 'react'
import UserProjects from './UserProjects'
import ContributionGraph from './ContributionGraph'

function UserProfile({ userData }) {
console.log(userData)
  return (
    <>
    <div>
          <p>Name: {userData.login}</p>
          <img src={userData.avatar_url} alt="User Avatar" />
          <h3>{userData.bio}</h3>
          <h3>Followers: { userData.followers}</h3>
          <h3>Followers: { userData.following}</h3>

        </div>
        <div>
            <UserProjects userData = {userData}/>
            <ContributionGraph userData = {userData}/>
        </div>
    </>
  )
}

export default UserProfile