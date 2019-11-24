import React from 'react';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import 'c/index.css';

class Messages extends React.Component{
    render(){
        return (
            <div className="messages-container">
                <div className="message-left">
                    <div className="message-name"> Henry Ryu</div>
                    <div className="message-content">Hey this is Henry. Nice to meet you. This sentence is for test perpose. </div>
                    <div className="message-meta">6:12 pm</div>
                </div>    
                <div className="message-right">
                    <div className="message-name"> Shirley Yung</div>
                    <div className="message-content">Hey this is Shirley. Nice to meet you. I don't know this is fixed width colsdfasdfasdf</div>
                    <div className="message-meta">6:12 pm</div>
                </div>
                <div className="message-right">
                    <div className="message-name"> Shirley Yung</div>
                    <div className="message-content">Hey this is Shirley. Nice to meet you. colsdfasdfasdf</div>
                    <div className="message-meta">6:12 pm</div>
                </div>
                <div className="message-right">
                    <div className="message-name">Shirley Yung</div>
                    <div className="message-content">Hey this is Shirley. Nice to meet you. I don't know this is fixed width colsdfasdfasdfHey this is Shirley. Nice to meet you. I don't know this is fixed width colsdfasdfasdf</div>
                    <div className="message-meta">6:12 pm</div>
                </div>
                <div className="message-left">
                    <div className="message-name"> Henry Ryu</div>
                    <div className="message-content">Hey this is Henry. Nice to meet you. This sentence is for test perpose. </div>
                    <div className="message-meta">6:12 pm</div>
                </div>
                <div className="message-left">
                    <div className="message-name"> Henry Ryu</div>
                    <div className="message-content">Hey this is Henry. Nice to meet you. This sentence is for test perpose. </div>
                    <div className="message-meta">6:12 pm</div>
                </div>
                <div className="message-left">
                    <div className="message-name"> Henry Ryu</div>
                    <div className="message-content">Hey this is Henry. Nice to meet you. This sentence is for test perpose. </div>
                    <div className="message-meta">6:12 pm</div>
                </div>
            </div>
        )
    }
}

export default Messages;