import Footer from 'j/Footer'
import React from 'react';
import Navigation from 'j/Navigation';
import ChatMain from 'j/ChatMain'
import { Button } from 'react-bootstrap';

class Chat extends React.Component{
    render(){
        return (
            <>
                <Navigation/>
                <ChatMain/>
                <Footer/>
            </>
        )
    }
}

export default Chat;