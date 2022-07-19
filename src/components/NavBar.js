import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../atom/NavList.js";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <Navbar sticky="top" className={styles.background}>
      <Container>
        <Navbar.Brand>
          <Link className={styles.main_title} to={`/`}>
            Nflex
          </Link>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          {Group_key_arr.map((key) => {
            return (
              <div key={key}>
                <Nav>
                  <Link
                    className={styles.link}
                    to={`/page/${Group_obj[key]}/1`}
                  >
                    {key}
                  </Link>
                </Nav>
              </div>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
