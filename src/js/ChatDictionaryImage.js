import React from 'react';
import 'c/index.css';
import { Container, Row, Image } from 'react-bootstrap';

class ChatDictionaryImage extends React.Component{
    render(){
        return (
            <>
                <Container className="chat-dictionary-image" fluid={true}>  
                    <Row className="chat-dictionary-image-title">
                        Images for "Assuage"
                    </Row>
                    <Row className="chat-dictionary-image-block-row">
                        <Image className="chat-dictionary-image-block" src="http://www.prepbootstrap.com/Content/images/template/ResponsiveImageTiles/city1.jpg" rounded fluid />
                        <Image className="chat-dictionary-image-block" src="http://www.prepbootstrap.com/Content/images/template/ResponsiveImageTiles/city2.jpg" rounded fluid />
                        <Image className="chat-dictionary-image-block" src="http://www.prepbootstrap.com/Content/images/template/ResponsiveImageTiles/city3.jpg" rounded fluid />
                        <Image className="chat-dictionary-image-block" src="http://www.prepbootstrap.com/Content/images/template/ResponsiveImageTiles/city1.jpg" rounded fluid />
                        <Image className="chat-dictionary-image-block" src="http://www.prepbootstrap.com/Content/images/template/ResponsiveImageTiles/city4.jpg" rounded fluid />
                        <Image className="chat-dictionary-image-block" src="http://www.prepbootstrap.com/Content/images/template/ResponsiveImageTiles/city5.jpg" rounded fluid />
                        <Image className="chat-dictionary-image-block" src="http://www.prepbootstrap.com/Content/images/template/ResponsiveImageTiles/city1.jpg" rounded fluid />
                        <Image className="chat-dictionary-image-block" src="http://www.prepbootstrap.com/Content/images/template/ResponsiveImageTiles/city6.jpg" rounded fluid />
                        <Image className="chat-dictionary-image-block" src="http://www.prepbootstrap.com/Content/images/template/ResponsiveImageTiles/city7.jpg" rounded fluid />
                    </Row>
                    <div className="chat-dictionary-image-separator">
                    </div>
                </Container>
            </>
        )
    }
}

export default ChatDictionaryImage;