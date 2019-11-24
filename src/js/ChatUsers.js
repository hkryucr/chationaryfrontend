import React from 'react';
import { Row, Container, Col, Button} from 'react-bootstrap' 

class ChatUsers extends React.Component{
    render(){
        return (
            <Container>
                <Row className="p-3 border-bottom" style={{fontWeight: "bold", fontSize: "1.2 em", marginBottom: "5px"}}> Users</Row>
                <Col>
                    <Row className="p-1">Henry</Row>
                    <Row className="p-1">Shirley</Row>
                    <Row className="p-1">Billy</Row>
                </Col>
                <Row>
                    <Button >Leave</Button>
                </Row>
            </Container>
        )
    }
}

export default ChatUsers;