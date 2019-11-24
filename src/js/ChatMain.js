import ChatDictionary from 'j/ChatDictionary.js'
import ChatUsers from 'j/ChatUsers.js'
import ChatMessenger from 'j/ChatMessenger.js'
import React from 'react';
import { Row, Container, Col } from 'react-bootstrap' 

class ChatMain extends React.Component{
    render (){
        return (
            <Container className="chat-main-container" fluid={true}>
                <ChatUsers/>
                <ChatMessenger/>
                <ChatDictionary/>
            </Container>
        )
    }
}

export default ChatMain;