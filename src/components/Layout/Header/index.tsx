import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Example App</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem
            onClick={() => {
              history.push("/login");
            }}
          >
            <NavLink>Logout</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
