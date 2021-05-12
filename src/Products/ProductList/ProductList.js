import React from 'react'
import  ProductData from "../Product.json";
import {Col,Card,Button,Row,Container  } from "react-bootstrap";

import {Link, Route} from "react-router-dom";
import  "./pl.css";

export default function ProductList(match) {
     
  console.log(match);
      
  
    return (
        <>
        <Container>
         <Row>
             {ProductData.products.map(e=>(
               
<Col lg='4'  key={e.id}>
<Card className="card1">
<Card.Img   className="cardd"   variant="top" src={e.image} />
<Card.Body>
<Card.Title >{e.title}</Card.Title>
<Card.Text>
  {e.description}
</Card.Text>
<Link to={`Subcat/${e.id}`}>
<Button variant="primary">Go somewhere</Button>
</Link> 
</Card.Body>
</Card>
</Col>
        
          
            ))}
    
    
  </Row>
  </Container>
 
                                        
    
           
        </>
    )
}
