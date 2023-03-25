
import { useEffect, useState} from "react";
import axios from "axios";
import { Form} from "react-bootstrap";
 export default function Search1() {
  const [searchtext,setsearchtext]=useState('')
  const [authers,setauthers]=useState([]);
  const [temp,settemp]=useState([]);

 useEffect(() => {
   console.log(searchtext);
   handleSearch();
   },[searchtext]);

   //HandleSEARCH FUNCTION
  const  handleSearch=async(e) => {
       setsearchtext(e.target.value)
   
    try { 
      const res=await axios.get(`http://localhost:5000/api/authors/search/${searchtext}`)
     // console.log(res.data.message)
      console.log(res.data)
      setauthers(res.data)
      settemp(res.data)
      //getAuthors();
    } catch (err) { 
      //setauthers("")
     
    }
   }

   const handleDelete = async (id) => {
    try {
     
      await axios.delete(`http://localhost:5000/api/authors/${id}`);
      //getAuthors(searchtext);
      setauthers("");
      

    } catch (err) {
      console.log(err);
      //setauthers("")
    }
  };

  return (
     <>

    <Form className="container w-50">
      <h2>SEARCH FOR Author</h2>
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>SearchBYfirstName</Form.Label>
        <Form.Control type="text" onReset={handleSearch} onChange={handleSearch} placeholder="Enter firstName" />
      </Form.Group>
      
    </Form> </Form>
     <hr/>

     
     {

     authers.length?(
      <table align="center" border="1" >
      <tr><th colspan="2">FirstName</th> <th>LaststName</th><th>nationality</th></tr>
    {
    authers.map((item,index)=>{ return(
   <tr key={item._id}>
       <td>{1+index}</td>
       <td>{item['firstName']}</td> 
       <td>{item.lastName}</td>
       <td>{item.nationality}</td>
       
    <td> <input type="button" className="btn btn-primary" value="UpDate" name="upDate"/></td>
    <td> <input type="button" className="btn btn-danger" 
    onClick={() => handleDelete(item._id)} value="Delete"  ame="update"/></td>
   </tr>
   
      )} )
    
    
  }

      </table>  
     ):(<h1>THERE ARE NO DATA</h1>)


     }

     
     
     {/* {!searchtext}?(
      <table align="center" border="1" >
        <tr><th colspan="2">FirstName</th> <th>LaststName</th><th>nationality</th></tr>
      {
      authers.map((item,index)=>{ return(
     <tr key={item._id}>
         <td>{1+index}</td>
         <td>{item['firstName']}</td> 
         <td>{item.lastName}</td>
         <td>{item.nationality}</td>
         
      <td> <input type="button" className="btn btn-primary" value="UpDate" name="upDate"/></td>
      <td> <input type="button" className="btn btn-danger" 
      onClick={() => handleDelete(item._id)} value="Delete"  ame="update"/></td>
     </tr>
     
        )} )
      
      
    }

        </table>  
  
 
            ) : ( <h1>there are NO  DATA</h1>);
 */}


    
     
    
 

<br/> 
    
 

    

</> 
  )

}