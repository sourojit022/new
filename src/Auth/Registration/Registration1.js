import React  from 'react'
import { useState }  from 'react'
import { Container, Row,Col,Carousel } from 'react-bootstrap';
 import { useHistory } from "react-router-dom";
 import Icon from '@material-ui/core/Icon';
 import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
 
import  "./Registration1.css";

import axios from 'axios';


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));

export default function Registration1() {

   const classes = useStyles();
     

    
    const [inputstate, setinputstate]=useState({error:{
        firstname:"",
        lastname:"",
        
        email:"",
        psw:"",
        
        }
    })

    const handleChnage=(event)=>{
       
        var emailVal=new RegExp ("^[a-zA-Z0-9+_.@]");
        var pswVal=new RegExp ("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$");
        
         
        let {name,value}=event.target;
        let err={...inputstate.error};
        switch (name) {
            case 'firstname':
                err.firstname=value.length<3 ? "*Enter Minimum Three Characters":"";
                break;

            case 'lastname':
                err.lastname=value.length<3 ? "*Enter Minimum Three Characters":"";
                break;
            
            case 'email':
                err.email=emailVal.test(value) ? "": "*Enter a valid email address";
                break;
            
           
           
            
            case 'psw':
                err.psw=pswVal.test(value) ? "":"*Minimum eight characters, at least one number and special characters";
                break;

                
                  
                      default:
                      break;

                   
            
        }
        setinputstate({...inputstate,[name]:value,error:err})
            console.log(inputstate);

           
    }

    const SubmitHandler=(e)=>{
        e.preventDefault();
     
       
        console.log(inputstate);

        let userDetails={firstname:inputstate.firstname,lastname:inputstate.lastname,email:inputstate.email,password:inputstate.psw}
        console.log(userDetails);
        axios.post("https://api09.herokuapp.com/register",userDetails)
        .then(res=>{
          console.log(res);
          let storeData=res.data.token;
          window.sessionStorage.setItem('token',storeData)
          console.log(storeData);
         
        })
        .catch(err=>console.log(err));

        

          
        
    }
    return (

      
         
        <div className="div1">
              <Container>
                 <Row >
                     <Col > 


                    

                
            <form onSubmit={SubmitHandler}  className={classes.root} noValidate autoComplete="off">
                <h1 className="title1">Registration</h1> 
                
                
          <TextField id="standard-basic" label="First Name" required name="firstname" type="text" placeholder="Enter First Name"onChange={handleChnage}className="input1"/>
                <p className="warning">{inputstate.error.firstname}</p>

                <TextField id="standard-basic" label="Last Name" required name="lastname" type="text" placeholder="Enter Last Name"onChange={handleChnage}className="input1"/>
                <p className="warning">{inputstate.error.lastname}</p>
                

               
                    
                <TextField id="standard-basic" label="Email*" name="email" type="text" placeholder="Enter Email" onChange={handleChnage} className="input1" />
               
                <p className="war">{inputstate.error.email}</p>

                
                  
                <TextField id="standard-basic" label="Password" name="psw" type="password" placeholder="Enter Password"onChange={handleChnage}className="input1" />
                
                <p className="warning">{inputstate.error.psw}  </p>
                 
                
                
                
                
                
                
                <Button
        variant="contained"
        color="primary"
        className={classes.button}
        
        type="submit" id="button1">
        
        Send


      </Button>

                
            </form>
            
            </Col>

            <Col >
              
            <Carousel className="slider1">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/56/da/a9/56daa913ac18c12177d41cad982fc6ae.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.statically.io/img/i.pinimg.com/originals/95/c9/22/95c922f924e657a7cd502cbbe98c10c8.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpapercave.com/wp/wp3992907.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </Col>
            </Row>
            </Container>
            </div>
            
            
           
        
    )
}
