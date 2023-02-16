import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: var(--color-secondary);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1000;
  width: 100%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  //width: 100%;
  padding: 10px 24px;
  //max-width: 1100px;
  width: 80%;
`;

export const NavLogo = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  width: 100%;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinkS = styled(LinkS)`
  // color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid var(--color-primary);
  }
`;

// I created NavLinkR to be used when the user is not on the home page. ("/")
export const NavLinkR = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid var(--color-primary);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
