import React, { useState } from 'react';
import './CreateAccount.css';
import GitHubClient from './Service'
// import { useFormik } from 'formik'
import * as Yup from 'yup'


 function CreateAccount() {
  const [data,setData] = useState({
    firstName : "",
    lastname:"",
    email:""
  })


  const apiCall = ((res)=>{
    GitHubClient.post("api/social-users",{data})

   .then((res)=>{
    setData(res)
    console.log(res)

    .catch((res)=>{
     alert("data not submit")
    })
   })
  })


  const onChangeHandler=((e)=>{
   setData({...data,[e.target.name]: e.target.value})
  })
 
//   const personalForm = () => {


    
//     const initialValues = {}
//     const validationSchema = Yup.object({})
//     const formik = useFormik({})
//  }

 


  return (
    <div className='Container'>
        <div className='fluid'>
        <h2>Create an Account</h2>
        
        <div className='user-input'>
            <input placeholder='First Name' name='firstName'  onChange={onChangeHandler}></input>
            <input  placeholder='Last Name' name='lastName'  onChange={onChangeHandler}></input>
            <input  placeholder='Email id' name='email' onChange={onChangeHandler}></input>
        </div>
        <div>
            <button className='Submit-red' onClick={apiCall}>Submit</button>
        </div>
        </div>
    </div>
  )
}
export default CreateAccount;
