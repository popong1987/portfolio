import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, Container, Nav} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="white" expand="lg" variant="light">
            <Container fluid>
                <LinkContainer to={"/"}>
                    <Navbar.Brand>LDH</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav>
                        <LinkContainer to={"/home"}>
                            <Nav.Link>HOME</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/about"}>
                            <Nav.Link>ABOUT</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/experience"}>
                            <Nav.Link>EXPERIENCE</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/work"}>
                            <Nav.Link>WORK</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/art"}>
                            <Nav.Link>ART</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/contact"}>
                            <Nav.Link>CONTACT</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
