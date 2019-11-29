import React from 'react';
import { Container } from 'react-bootstrap';
import 'c/index.css';
import ChatDictionaryMeaning from 'j/ChatDictionaryMeaning.js';
import ChatDictionaryImage from 'j/ChatDictionaryImage.js';

class ChatDictionary extends React.Component{
    render(){
        return(
            <Container className="chat-dictionary">
                <ChatDictionaryMeaning/>
                <ChatDictionaryImage/>
            </Container>
        )
    }
}

export default ChatDictionary