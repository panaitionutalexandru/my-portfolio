import React, { useState } from "react";
import {
  Container,
  NavBar,
  NavCtn,
  NavList,
  NavItem,
  NavLink,
  Menu,
  MenuOpen,
  MenuClosed,
  LogoCtn,
  Logo,
  LogoSpan,
} from "./Header.style";

export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Container className="Header">
      <NavBar className="Navigation">
        <NavCtn className="NavContainer">
          <LogoCtn className="LogoContainer">
            <Logo className="Logo" to="/">
              Ionut Panait
              <br />
              <LogoSpan>Front-End Developer</LogoSpan>
            </Logo>
          </LogoCtn>
          <Menu className="HamburgerMenu" onClick={handleClick}>
            {click ? <MenuClosed /> : <MenuOpen />}
          </Menu>
          <NavList className="NavUl" onClick={handleClick} click={click}>
            <NavItem className="NavItem">
              <NavLink className="NavLink" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="NavItem">
              <NavLink className="NavLink" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem className="NavItem">
              <NavLink className="NavLink" to="/work">
                Work
              </NavLink>
            </NavItem>
            <NavItem className="NavItem">
              <NavLink className="NavLink" to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </NavList>
        </NavCtn>
      </NavBar>
    </Container>
  );
};
