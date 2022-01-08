import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiThLarge, TiTimes } from "react-icons/ti";

export const Container = styled.header`
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavBar = styled.nav`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const NavCtn = styled.div`
  max-width: 100%;
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  margin: 0 auto;
  padding: 0 5rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
    opacity: 1;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
`;

export const NavItem = styled.li`
  display: block;
  margin: 0 2.2rem;
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 2rem;
  padding: 1.6rem;
  margin: -1.6rem;
  color: #ffffff;
  font-weight: 600;

  @media (max-width: 768px) {
    padding: 1.6rem 6rem;
    margin: 1.6rem 0;
  }
`;

export const Menu = styled.div`
  display: none;
  position: relative;
  z-index: 999;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;
    cursor: pointer;
    padding: 1rem;
    margin: -1rem;
  }
`;

export const MenuOpen = styled(TiThLarge)`
  color: #ffffff;
`;

export const MenuClosed = styled(TiTimes)`
  color: #ffffff;
`;

export const LogoCtn = styled.div`
  line-height: 1;
  cursor: pointer;
`;

export const Logo = styled(Link)`
  display: block;
  padding: 1.6rem;
  margin: -1.6rem;
  font-size: 2rem;
  font-weight: 900;
  color: #ffffff;
`;

export const LogoSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;
