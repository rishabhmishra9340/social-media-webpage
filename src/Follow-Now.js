import React, { useEffect, useState } from "react";
import "./Follow-Now.css";
import Vector1 from "./images/Vector 1.png";
import GitHubClient from "./Service";

export default function FollowNow() {
  const [userList, setUserList] = useState([]);
  const [list, setList] = useState([]);

  function getFollowHandler (){
    GitHubClient.get("api/social-users?populate=*").then((res) => {
      setUserList(res.data.data)
      console.log(res.data.data)
      .catch((res) => {
        alert("Data Not Fetched");
      });
    });
  }

  function followHandler (){
    console.log(userList?.id)
    console.log(userList)

    GitHubClient.put(`api/social-users/36`).then((res) => {  
      
      setList(res)
      
      console.log(res)
      .catch((res) => {
        alert("Data Not Fetched");
      });
    });
  }

  const onChangehandler = ((e)=>{
     setUserList({...userList,[e.target.name]:e.target.value})
  })

  useEffect(() => {
    getFollowHandler()
  }, []);
  useEffect(() => {
    followHandler()
  }, []);

  return (
    <div className="container">
      <h3>Follow Now</h3>
      <div className="container-fluid">
        <div className="select-container">
          <div>
            <div className="select-heading">Select by</div>
            <div className="select-box">
              <select>
                {userList.map((ele, i) => {
                  return (
                    <option key={i} value={ele.attributes.firstName}>
                      {ele.attributes.firstName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <div className="select-heading">Following to</div>
         
            <select>
              {userList.map((ele, i) => {
                return (
                  <option key={i} value={ele.attributes.firstName}>
                    {ele.attributes.firstName}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="Follow-btn">
          <button className="Follow-red" onClick={followHandler}>Follow</button>
        </div>
      </div>
    </div>
  );
}
