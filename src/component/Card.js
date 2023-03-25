import { Button, Card} from "react-bootstrap"


export const Card1=({no,title,desc,img,startTime})=>{
 let m=10;
  return (
    <>
     { 
      m>0?(<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {desc}
         
        </Card.Text>
        <Button variant="primary">start {startTime}</Button>
      </Card.Body>
    </Card>):(m=m+1)
    }

    
    </>
   
)}

