import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faScaleUnbalanced} from "@fortawesome/free-solid-svg-icons"
function NavBar() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark" className="navbar p-3 ">
          <Container className="nav">
            <Navbar.Brand href="#home"className="text-white " style={{cursor:'default'}}>Justice Served <FontAwesomeIcon icon={faScaleUnbalanced}/></Navbar.Brand>
            <Nav>
              <Link className="nav nav-link text-white" to="/">
                Home
              </Link>
              <Link className="nav nav-link text-white" to="/about">
                About Us
              </Link>
              <Link className="nav nav-link text-white" to="/login">
                Login
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default NavBar;