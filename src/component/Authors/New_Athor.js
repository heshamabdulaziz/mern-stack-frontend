import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form,Container } from "react-bootstrap";
import { useState} from "react";
import axios from "axios";
import {toast,ToastContainer} from 'react-toastify';

export default function New_Auther() {
  const navigate = useNavigate();
    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [nationality,setnationality]=useState('')
    const [error, setError] = useState(null);

    
    // const create_Auther=async(e)=>{
    //     e.preventDefault();
    //     //setusers(res.data)
    //   const res=await axios.post("http://localhost:5000/api/authors",{ 
    //     firstName:firstName,
    //     lastName:lastName,
    //     nationality:nationality
        
    //     }).then(res=>{
    //      // toast("YOUR COUNT CREATED SUCCESSFULLY")
    //    console.log("*******");
    //    console.log(res.data);
    //    console.log("*******");
        
    //   })
    // }

    const create_Auther=async(e) => {
      e.preventDefault();
      try {
        const res=await axios.post("http://localhost:5000/api/authors",{ 
        firstName:firstName,
        lastName:lastName,
        nationality:nationality
        })
       // if (firstName.includes('@')) return toast.error("Invalid first name");
        //toast.error("Invalid first name")
        setfirstName('');
        setlastName('');
        setnationality('');
        //toast.success("success success success")
        toast.success("you insert all info successfuly");
        navigate('/get_AllAuther');
        
        
        console.log(res.data.message)
        //getAuthors();
      } catch (err) { 
        
        //toast('Here is error.');
        setError(err.response.data.message);
        toast.error(err.response.data.message)
        
      }
   
   
    
     
      
          }

  return (
     <>
{firstName}
{lastName}
{ nationality}
<Container>
    {error && <p>Error: {error}</p>} {/* Add this line to display error message */}
    ...
  </Container>
  <ToastContainer 
  theme='colored'
  position='top-center'/>


 
     <div className="container w-50">
      <h2>NEW Author</h2>
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>firstName</Form.Label>
        <Form.Control type="text"  value={firstName} onChange={(e)=>setfirstName(e.target.value)} placeholder="Enter firstName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="uesernam">
        <Form.Label>lastName</Form.Label>
        <Form.Control type="text"  value={lastName} onChange={(e)=>setlastName(e.target.value)} placeholder="Enter lasttName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>nationality</Form.Label>
        <Form.Control type="text"  value={nationality} onChange={(e)=>setnationality(e.target.value)} placeholder="nationality" />
      </Form.Group>
      
      <Button variant="primary" onClick={create_Auther} type="submit">
        Submit
      </Button>
  
      </Form> 
     <hr/>

      </div>
    
    </>
  )
}
