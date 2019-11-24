import React from 'react';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';

class Messages extends React.Component{
    render(){
        return (
            <Container id="messages" className="d-flex flex-column" style={{marginTop: "16px"}}>
                <Row className="message">
                    <Col className="messageName">Admin</Col>
                    <Col className="messageMeta">6:12 pm</Col>
                </Row>    
                <Row><Col>This is a text!</Col></Row>
            </Container>
        )
    }
}

export default Messages;