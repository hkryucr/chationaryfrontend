import React from 'react';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import 'c/index.css';


class Compose extends React.Component{
    render(){
        return(
            <Form style={{marginTop:"auto", marginBottom: 6}}>
                <Form.Row>
                    <Col>
                        <Form.Control className="chat-messenger-compose-form-control" type="text" size="md" placeholder="message"></Form.Control>                            
                    </Col>
                    <Col>
                        <Button variant="info" size="md" type="submit" value="Submit">Send</Button>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}

export default Compose;