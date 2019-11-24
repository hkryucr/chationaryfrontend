import React from 'react';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import Messages from 'j/Messages.js'
import Compose from 'j/Compose.js'

class ChatMessenger extends React.Component{
    render(){
        return (
            <>
                <Messages/>
                <Compose/>
            </>
        )
    }
}

export default ChatMessenger;