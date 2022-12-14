import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

function Navbarcontainer() {
  const element = <FontAwesomeIcon icon={faCartArrowDown} />;
  const cartCount = useSelector((state) => state.cartstore.cartCount);
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="">
            <Nav.Link>
              <Link to={"/cart"}>
                {element}
                {cartCount}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">Products</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/counter">Counter</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup">SignUp</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarcontainer;
