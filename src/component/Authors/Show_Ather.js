import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";
export default function Show_Auther() {
  const [authers,setauthers]=useState([])

  useEffect(() => {
    getAuthors();
  }, []);

  const getAuthors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/authors");
      setauthers(res.data)
      
    } catch (err) {
      console.log(err);
    }
  };

//
const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/authors/${id}`);
      getAuthors();
    } catch (err) {
      console.log(err);
    }
  };
 
  return (
   
<>

<br/>
    <table align="center" border="1" >
        <tr><th colspan="2">FirstName</th> <th>LaststName</th><th>nationality</th></tr>
      {
      authers.map((element,index)=>{
        return(
        
     <tr key={element._id}>
         <td>{1+index}</td>
         <td>{element['firstName']}</td> 
         <td>{element.lastName}</td>
         <td>{element.nationality}</td>
         
      <td><Link to={`/Update_Author/${element._id}?fname=${element.firstName}&&lname=${element.lastName}&&nationality=${element.nationality}`}><input type="button" className="btn btn-primary" value="UpDate" name="upDate"/></Link>
         </td>
      <td> <input type="button" className="btn btn-danger " 
      onClick={() => handleDelete(element._id)} value="Delete"  name="delete"/></td>
     </tr>
     )
    
      }
      
      )
      
      
    }

        </table> 
 

<br/>    
</>
  )
}

