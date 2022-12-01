import React, { useEffect, useState } from 'react'
import './Followers.css'
import Circle from './images/Ellipse 1.png'
import GitHubClient from './Service'

export default function Followers() {

    const [users,setusers] = useState([])

    function getFollowHandler (){
        GitHubClient.get("api/social-users?populate=*").then((res) => {
            setusers(res.data.data)
          console.log(res.data.data)
          .catch((res) => {
            alert("Data Not Fetched");
          });
        });
      }

      useEffect(()=>{
        getFollowHandler()
      },[])
  return (
    <div className='container-followers'>
     <h3>User and their Followers</h3>

     <div className='followers-fluid'>
     {users.map((ele, i) => {
                return (
                  <option key={i} value={ele.attributes.followers}>
                    {ele.attributes.followers.data.attributes}
                    {console.log(ele.attributes.followers.data)}
                  </option>
                );
              })}
        <div className='cards'>
            <div className='image'><img src={Circle}></img></div>
          
         
          
        </div>

     </div>

    </div>
  )
}
