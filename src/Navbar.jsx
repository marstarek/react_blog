import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Mars.png";

function MyNavbar() {
  return (
    <Navbar expand="xl" bg="dark  " variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          مارس{" "}
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">الرئيسية</Nav.Link>
            <Nav.Link href="/create">أكتب مقال</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
