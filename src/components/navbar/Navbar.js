import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinkS,
  NavLinkR,
} from "./NavbarElements";
import { useNavigate, useLocation } from "react-router-dom";
import { navbarList } from "./NavbarList";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [selectedElementFromOtherPages, setSelectedElementFromOtherPages] =
    useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // I'm using this to check the current path.
  console.log(location.pathname);

  /*
    How it works:
    1. When the user clicks on the dashboard link, the dashboard component will set the selectedElementFromDashboard state to the id of the element that the user wants to scroll to.
    2. When the user clicks on the dashboard link, the user will be redirected to the home page.
    3. When the user is redirected to the home page, the useEffect hook will check if the selectedElementFromDashboard state is not empty.
    4. If the selectedElementFromDashboard state is not empty, the useEffect hook will scroll to the element with the id that is stored in the selectedElementFromDashboard state.
    5. After the useEffect hook has scrolled to the element, the selectedElementFromDashboard state will be set to an empty string.
  */
  useEffect(() => {
    if (location.pathname === "/") {
      if (selectedElementFromOtherPages !== "") {
        const element = document.getElementById(selectedElementFromOtherPages);
        element.scrollIntoView({ behavior: "smooth" });

        setSelectedElementFromOtherPages("");
      }
    }

    if (
      location.pathname === "/fin" ||
      location.pathname === "/amazon" ||
      location.pathname === "/byob" ||
      location.pathname === "/covid"
    ) {
      // Whenever user navigates to other pages, scroll to top of page.
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              NishaBhattarai
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              {navbarList.map((item) => {
                return (
                  // When the user is on the home page, the NavLinkS component will be used. When the user is not on the home page, the NavLinkR component will be used.
                  <NavItem key={item.id}>
                    {location.pathname === "/" ? (
                      <NavLinkS
                        to={item.to}
                        smooth={true}
                        duration={300}
                        spy={true}
                        exact="true"
                        offset={-80}
                        scrollNav={scrollNav}
                      >
                        {item.title}
                      </NavLinkS>
                    ) : (
                      <NavLinkR
                        to={"/"}
                        onClick={() => {
                          setSelectedElementFromOtherPages(item.to);
                        }}
                      >
                        {item.title}
                      </NavLinkR>
                    )}
                  </NavItem>
                );
              })}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
