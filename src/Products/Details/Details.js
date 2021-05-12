import React from 'react'
import {Row,Col,Card,Button,Container} from 'react-bootstrap';
import {Route,Link} from 'react-router-dom';

import ProductData from "../Product.json";
export default function Productdetails({match}) {
    console.log(match);
    
    let productValue=ProductData.products.find(e=>e.id==match.params.pid)
    console.log(productValue);
    let pDetails=productValue.brands.find(e=>e.id===match.params.pdid)
   console.log(pDetails);

    return (
        <div>
           <h1>Welcome to product details Page</h1> 
           <Container>
           <Card >
  
  <Card.Body>
  
    <Card.Title>{pDetails.stitle}</Card.Title>
    <Card.Text>
   {pDetails.sdescription}
   <br/>
    Price:
   {pDetails.price} 
    </Card.Text>
    <Button variant="primary">Buy Now</Button>
  </Card.Body>
  
</Card>
           </Container>

        </div>
    )
}
