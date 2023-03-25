
import {useParams,useLocation, useNavigate} from "react-router-dom";
import { Button, Form,Container } from "react-bootstrap";
import { useEffect, useState} from "react";
import axios from "axios";
import {toast,ToastContainer} from 'react-toastify';

export default function Update_Author(props) {
    const {id}= useParams();
  console.log(`@@@@@@@@@@@@@@@@@@@@@@@  ${props} @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`);
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);

    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [nationality,setnationality]=useState('')
    const [error, setError] =useState(null);
    useEffect(() => {
      setfirstName(searchParams.get('fname') || '');
      setlastName(searchParams.get('lname') || '');
      setnationality(searchParams.get('nationality') || '');
  }, []);


    const Update_Auther=async(e) => {
      e.preventDefault();
      try {   console.log(id);
        const res=await axios.put(`http://localhost:5000/api/authors/${id}`,{ 
        firstName:firstName,
        lastName:lastName,
        nationality:nationality
        })
        if (firstName.includes('@')) return toast.error("Invalid first name");
        
        setfirstName('');
        setlastName('');
        setnationality('');
        toast.success("You updated the author successfully");
        //navigate('/get_AllAuther');
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
    
  </Container>
  <ToastContainer 
  theme='colored'
  position='top-center'/>


 
     <div className="container w-50">
      <h2> Update Author</h2>
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>firstName</Form.Label>
        <Form.Control type="text" value={firstName} onChange={(e)=>setfirstName(e.target.value)} placeholder="Enter firstName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="uesernam">
        <Form.Label>lastName</Form.Label>
        <Form.Control type="text" value={lastName} onChange={(e)=>setlastName(e.target.value)} placeholder="Enter lasttName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>nationality</Form.Label>
        <Form.Control type="text" value={nationality} onChange={(e)=>setnationality(e.target.value)} placeholder="nationality" />
      </Form.Group>
      
      <Button variant="primary" size="xl" onClick={Update_Auther} type="submit">
        Submit
      </Button>
  
      </Form> 
     <hr/>

      </div>
    
    </>
  )
}
