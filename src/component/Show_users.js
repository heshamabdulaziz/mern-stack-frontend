
import { useState,useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
export default function Show_users() {
  const [users,setusers]=useState([])
  
  useEffect(()=>{
     axios.get("http://localhost:5000/api/users").then(res=>{
     console.log("*******");
     console.log(res.data);
     console.log("*******");
      setusers(res.data)
    })


  },[])
  //http://localhost:5000/api/users

    // const users=[
    //     {uesrName:"hesham",email:"hesham@gmail.com"},
    //     {uesrName:"ali",email:"ali@gmail.com"},
    //     {uesrName:"abdulkaruim",email:"abdulkaruim@gmail.com"},
    //     {uesrName:"balal",email:"balal@gmail.com"},
    // ]

 
  return (
   
<>

   
    <table align="center" border="1">
        <tr><th>Name</th> <th>Email</th></tr>
      {users.map((item,index)=>{
        return(
        
     <tr key={item._id}> <td>{1+index}</td><td>{item['uesrName']}</td> <td>{item.email}</td>
      <td> <input type="button" className="btn btn-primary" value="upDate" name="upDate"/></td>
      <td> <input type="button" className="btn btn-danger"  value="Delete"  ame="update"/></td>
     </tr>
     )
    
      }
      
      )
      
      
    }

        </table> 
 

    

</>
  )
}
