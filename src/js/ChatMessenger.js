import React from 'react';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import Messages from 'j/Messages.js'
import Compose from 'j/Compose.js'
import 'c/index.css';

class ChatMessenger extends React.Component{
    render(){
        return (
            <Container className="chat-messenger">
                <Messages/>
                <Compose/>
            </Container>
        )
    }
}

export default ChatMessenger;