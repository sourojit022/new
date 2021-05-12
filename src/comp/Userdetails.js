import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Container,Row,Col} from 'react-bootstrap';
export default function Userdetails() {
    const [userid,setuserid]=useState([])


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>
       { // console.log(res);
        setuserid(res.data)
        console.log(userid);
    }
        )
        .catch(err=>console.error(err));
},[])   
    return (
        <div>
            
                    
                     <Container>
                    <Row>
                    {
                userid.map(e=>(
                        <Col>
                    <Card style={{ width: '18rem' }} key={e.id}>
                    <Card.Body>
                       
                        <Card.Text>
                        <div key={e.id}>
                    <div>{e.name}</div>
                    <div>{e.username}</div>
                    <div>{e.email}</div>
                    <div>{e.address.street}</div>
                    <div>{e.phone}</div>
                    <div>{e.website}</div> 
                    <div>{e.company.name}</div>
                    </div>
                        </Card.Text>
                        
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

