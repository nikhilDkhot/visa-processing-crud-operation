import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import HTP from "./logo.png";
import './navcss.css'; 


export function NavigationBar() {
    const customNavbarStyle = {
        backgroundColor: '#FED9ED'
    };
    const navLinkStyle = {
        color: '#EBE3D5' // Change text color to blue for all navbar options
    };

    return (
        <Navbar expand="lg" className="custom-navbar-bg" style={customNavbarStyle}>
            <Container>
            <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={HTP}
                        width="150"
                        height="50"
                        className="d-inline-block align-top class3"
                    />{' '}</Navbar.Brand>
                {/* <Navbar.Brand href="#home">Visa App</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link className="nav-text"><strong>Dashboard</strong></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/applicants-list">
                            <Nav.Link  className="nav-text"><strong>Applicant List</strong></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/visa-registration">
                            <Nav.Link  className="nav-text"><strong>Apply for Visa</strong></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about-us">
                            <Nav.Link  className="nav-text"><strong>About Us</strong></Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="ml-auto">
                        <LinkContainer to="/">
                            
                            <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Login"
                            menuVariant="light"
                            className="nav-text">
                            <LinkContainer to="/admin-login">
                                <NavDropdown.Item  className="nav-text">
                                    Admin Login
                                </NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/applicant-login">
                                <NavDropdown.Item  className="nav-text">
                                    Applicant Login
                                </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                           
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
