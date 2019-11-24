import React from 'react';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import 'c/index.css';

class Messages extends React.Component{
    render(){
        return (
            <Container className="messages-container">
                <div className="message left">
                    <div className="message name">Name Henry</div>
                    <div className="message content">Hey this is Henry. Nice to meet you. This sentence is for test perpose. </div>
                    <div className="message meta">6:12 pm</div>
                </div>    
                <div className="message right">
                    <div className="message name">Name Henry</div>
                    <div className="message content">Hey this is Henry. Nice to meet you</div>
                    <div className="message meta">6:12 pm</div>
                </div>
            </Container>
        )
    }
}

export default Messages;