import React from 'react';
import { Row, Container, Col, Button} from 'react-bootstrap' 
import 'c/index.css';

class ChatUsers extends React.Component{
    render(){
        return (
            <Container className="chat-users">
                <Row className="chat-users-title p-3 border-bottom"> Users</Row>
                <Col>
                    <Row className="p-1">Henry</Row>
                    <Row className="p-1">Shirley</Row>
                    <Row className="p-1">Billy</Row>
                </Col>
            </Container>
        )
    }
}

export default ChatUsers;