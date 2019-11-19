import React from 'react';
import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap' 

class Navigation extends React.Component{
    render(){
        return(
            <Navbar bg="info" variant="dark">
                <Navbar.Brand href="#home">Chationary</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Main</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        )
    }
}

export default Navigation;