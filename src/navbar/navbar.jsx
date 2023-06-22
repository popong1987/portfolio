import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, Container, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiSpaceInvaders } from '@mdi/js';

const NavBar = () => {
    const NavWrapper = styled.span`
    color: rgb(0, 255, 42)
  }
`
    return (
        <Navbar bg="black" expand="lg" className='navBar' variant="dark">
            <Container fluid>
                <LinkContainer to={"/"}>
                    <Navbar.Brand><img src="https://i.postimg.cc/4N99bWS2/space-invaders-icon-136180.png" height={'30vh'}/></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav>
                        <LinkContainer to={"/home"}>
                            <Nav.Link><NavWrapper>HOME</NavWrapper></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/experience"}>
                            <Nav.Link><NavWrapper>EXPERIENCE</NavWrapper></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/work"}>
                            <Nav.Link><NavWrapper>WORK</NavWrapper></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/contact"}>
                            <Nav.Link><NavWrapper>CONTACT</NavWrapper></Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
