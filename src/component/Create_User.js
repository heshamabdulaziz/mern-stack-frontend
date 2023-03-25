import React from 'react'

import { Button, Form } from "react-bootstrap";
import { useState} from "react";
import axios from "axios";
import { toast } from 'react-toastify';
export default function Create_User() {
    const [uesrName,setUesrName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  
    const createnwUser=()=>{
      
        //setusers(res.data)
      const res= axios.post("http://localhost:5000/api/auth/register",{ 
        email:email,
        uesrName:uesrName,
        password:password
  
     
        }).then(res=>{
         // toast("YOUR COUNT CREATED SUCCESSFULLY")
       console.log("*******");
       console.log(res.data);
       console.log("*******");
        
      })
    }

  return (
     <>

  {email}
  {uesrName}
  {password}
     <div className="container w-50">
      <h2>Register</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="uesernam">
        <Form.Label>Usernam</Form.Label>
        <Form.Control type="text"onChange={(e)=>setUesrName(e.target.value)} placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" onClick={createnwUser} type="submit">
        Submit
      </Button>
  
      </Form> 
     <hr/>
      </div>
    
    </>
  )
}
