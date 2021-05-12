import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Container,Row,Col} from 'react-bootstrap';
export default function Newapi() {
    const [userid,setuserid]=useState([])

    useEffect(()=>{
        axios.get("https://api09.herokuapp.com/register").then(res=>
       { // console.log(res);
        setuserid(res.data)
        console.log(userid);
    }
        )
        .catch(err=>console.error(err));
},[])   
    return (
        <div>
            <h1>welcome</h1>
             <Container>
                    <Row>
                    {
                userid.map(e=>(
                        <Col>
                    <Card style={{ width: '18rem' }} key={e.id}>
                    <Card.Body>
                       
                        <Card.Text>
                        <div key={e.id}>
                    <div>{e. title}</div>
                    <div>{e.lastname}</div>
                    <div>{e.email}</div>
                    <div>{e.psw}</div>
                    
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
