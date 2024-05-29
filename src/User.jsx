import React from "react";
import {Link, Outlet} from 'react-router-dom'
function User(){
    return(
        <>
      <h1>  This is User Component</h1>
      <button><Link to="orders">Orders</Link></button>
      <button><Link to="profile">Profile</Link></button>
      <Outlet/>
     <h1>This is nested demo</h1>
        </>
    )
}
export const Profile = () => {
    return(
    <>
    <h1>This is User Profile component</h1>
    </>
    )
}

export const Orders = () => {
    return(
        <>
            This is User Orders component
        </>
    )
}

export default User

