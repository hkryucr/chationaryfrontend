import React from 'react';
import { Row, Container, Col } from 'react-bootstrap' 

class ChatMain extends React.Component{
    render (){
        return (
            <Container>
                <Row>
                    <Col xs={4} md={2}>Users</Col>
                    <Col xs={4} md={5}>Chat</Col>
                    <Col xs={4} md={5}>Dictionary</Col>
                </Row>
            </Container>
        )
    }
}

export default ChatMain;