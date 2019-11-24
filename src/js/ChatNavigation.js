import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faSearch, faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import 'c/index.css';

class ChatNavigation extends React.Component{
    render(){
        return(
            <Navbar className="chat-nav-bar" bg="info" variant="dark">
                <Navbar.Brand href="#home">Chationary</Navbar.Brand>
                <Nav className="chat-nav ml-auto">
                    <Dropdown>
                        <Dropdown.Toggle variant="black text-light" id="dropdown-basic" size="md">
                            Users
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="chat-nav-dropdown-menu">
                            <Dropdown.Item className="chat-nav-dropdown-item-title">Current Users</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item>Henry</Dropdown.Item>
                            <Dropdown.Item>Shirley</Dropdown.Item>
                            <Dropdown.Item>Billy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <FontAwesomeIcon className="chat-nav-icon" icon={faHome} color="white" style={{marginRight: "6px"}}/>
                    <FontAwesomeIcon className="chat-nav-icon" icon={faUser} color="white" style={{marginRight: "6px"}}/>
                    <FontAwesomeIcon className="chat-nav-icon" icon={faSearch} color="white" style={{marginRight: "6px"}}/>
                    <FontAwesomeIcon className="chat-nav-icon" icon={faSignOutAlt} color="white"/>
                </Nav>
            </Navbar>
        )
    }
}

export default ChatNavigation;
