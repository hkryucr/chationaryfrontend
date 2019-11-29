import React from 'react';
import 'c/index.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

class ChatDictionaryMeaning extends React.Component{
    render(){
        return (
            <Container className="chat-dictionary-meaning-container">
                <div className="chat-dictionary-meaning-title">
                    <div className="chat-dictionary-meaning-title-word">assuage</div>
                    <div className="chat-dictionary-meaning-title-phonetic-spelling">[ uh-sweyj, uh-sweyzh ]</div>
                    <FontAwesomeIcon className="chat-dictionary-meaning-title-icon" icon={faVolumeUp} color="black" size="lg"/>
                    
                    {/* <div className="chat-dictionary-meaning-title-word"></div> */}
                </div>
                <div className="chat-dictionary-meaning-title-separator">
                </div>
                <div className="chat-dictionary-meaning-definition">
                    <div className="chat-dictionary-meaning-definition-type">
                        verb (tr)
                    </div>
                    <div value={1} className="chat-dictionary-meaning-definition-content">
                        <span className="chat-dictionary-meaning-definition-content-num">1.</span>
                        <span className="chat-dictionary-meaning-definition-content-meaning">
                            to soothe, moderate, or relieve (grief, pain, etc)
                        </span>
                    </div>
                    <div value={2} className="chat-dictionary-meaning-definition-content">
                        <span className="chat-dictionary-meaning-definition-content-num">2.</span>
                        <span className="chat-dictionary-meaning-definition-content-meaning">
                            to give relief to (thirst, appetite, etc); satisfy
                        </span>    
                    </div>
                    <div value={3} className="chat-dictionary-meaning-definition-content">
                        <span className="chat-dictionary-meaning-definition-content-num">3.</span>
                        <span className="chat-dictionary-meaning-definition-content-meaning">to pacify; calm</span> 
                    </div>
                </div>
                <div className="chat-dictionary-meaning-definition">
                    <div className="chat-dictionary-meaning-definition-type">
                        verb (tr)
                    </div>
                    <div value={1} className="chat-dictionary-meaning-definition-content">
                        <span className="chat-dictionary-meaning-definition-content-num">1.</span>
                        <span className="chat-dictionary-meaning-definition-content-meaning">
                            to soothe, moderate, or relieve (grief, pain, etc)
                        </span>
                    </div>
                    <div value={2} className="chat-dictionary-meaning-definition-content">
                        <span className="chat-dictionary-meaning-definition-content-num">2.</span>
                        <span className="chat-dictionary-meaning-definition-content-meaning">
                            to give relief to (thirst, appetite, etc); satisfy
                        </span>    
                    </div>
                    <div value={3} className="chat-dictionary-meaning-definition-content">
                        <span className="chat-dictionary-meaning-definition-content-num">3.</span>
                        <span className="chat-dictionary-meaning-definition-content-meaning">to pacify; calm</span> 
                    </div>
                </div>
                <div className="chat-dictionary-meaning-definition">
                    <div className="chat-dictionary-meaning-definition-type">
                        verb (tr)
                    </div>
                    <div value={1} className="chat-dictionary-meaning-definition-content">
                        <span className="chat-dictionary-meaning-definition-content-num">1.</span>
                        <span className="chat-dictionary-meaning-definition-content-meaning">
                            to soothe, moderate, or relieve (grief, pain, etc)
                        </span>
                    </div>
                    <div value={2} className="chat-dictionary-meaning-definition-content">
                        <span className="chat-dictionary-meaning-definition-content-num">2.</span>
                        <span className="chat-dictionary-meaning-definition-content-meaning">
                            to give relief to (thirst, appetite, etc); satisfy
                        </span>    
                    </div>
                    <div value={3} className="chat-dictionary-meaning-definition-content">
                        <span className="chat-dictionary-meaning-definition-content-num">3.</span>
                        <span className="chat-dictionary-meaning-definition-content-meaning">to pacify; calm</span> 
                    </div>
                </div>
                <div className="chat-dictionary-meaning-title-separator">
                </div>
            </Container>
        )
    }
}

export default ChatDictionaryMeaning;