import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const {user,isAuthenticated}=useAuth0();
    if(!isAuthenticated) return <h2>Oops!! No User found :( -- pls Log In</h2>
  return (
     isAuthenticated && <div>
         <h2>User Details:</h2><br></br>
     <img src={user.picture} alt='No User found :( -- pls log in'></img>
     <h2>{user.name}</h2>
     <p>{user.email}</p>
     
    </div>
  )
} 

export default Profile