import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function Navbar2(Props) {
  const name= 8
  const history = useHistory();
    const logout=()=>{
      window.sessionStorage.clear();
      history.push('/login')
    } 
    return (
        <>
       
        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="container">
  <Navbar.Brand href="/Brand">Brand</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
    <Nav.Link as={Link} to='/Products'> Product List</Nav.Link>
    
      <Nav.Link as={Link} to={`/About/${name}`}>About</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to='/Registration'>Reg</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/Login'>Login</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/Registration1'>Registration1</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/Userdetails'>Userdetails</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/Profile'>Profile</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/Newapi'>Newapi</NavDropdown.Item>
        <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Item href="/Contact">Contact</NavDropdown.Item>
        <button onClick={logout} >Logout</button>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>


        </>
    )
}
