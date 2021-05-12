import React from 'react'
import productData from "../Product.json";
import {Col,Card,Button,Row,Container  } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./subcat.css";


export default function Subcat({match}) {
       console.log(match);
    let productvalue=productData.products.find(e=>e.id===match.params.pid);
    console.log(productvalue);
      

    return (
        <div>
            <h1>Welcome to Sub Category Page</h1>
            <Container>
                <Row>
                {
     productvalue.brands.map(e=>(
       
            <Col lg="4" key={e.id}>
  
            <Card>
          <Card.Img className="cardss" variant="top" src={e.image}  />
          <Card.Body>
            <Card.Title>{e.stitle}</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Link to={`/Details/${match.params.pid}/${e.id}`} > <Button variant="primary">Details</Button>
            </Link>
          </Card.Body>
        </Card>
            
            
            </Col>  
           
        ))
    }
  
    
  </Row>

 </Container>

        </div>
    )
}