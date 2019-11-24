import React from 'react';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import 'c/index.css';


class Compose extends React.Component{
    render(){
        return(
            <Form className="compose-form">
                <Form.Row className="compose-form-row">
                    <Form.Control className="compose-form-control" as="textarea" size="md" placeholder="message" rows="1"></Form.Control>
                    <Button variant="info" size="md" type="submit" value="Submit">Send</Button>
                </Form.Row>
            </Form>
        )
    }
}

export default Compose;