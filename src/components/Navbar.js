import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import logo from '../assets/images/logo/deski_01.svg'

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 38) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "landing-menu fixed" : "landing-menu"}>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-md-1">
            <a href="/">
              <img src={logo} alt="home-demo" />
            </a>
          </div>
          {/* End logo */}

          <div className="order-md-3 d-flex align-items-center">
            {/* <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              className="menu-btn more_themes font-rubik"
              target="_blank"
              rel="noreferrer"
            >
              More Themes
            </a>

            <a
              href="https://themeforest.net/item/deski-saas-software-react-template/33799794"
              className="menu-btn buy-button font-rubik"
              target="_blank"
              rel="noreferrer"
            >
              Buy Deski
            </a> */}
            <div className="mob-header">
              <button className="toggler-menu" onClick={handleClick}>
                <div className={click ? "active" : ""}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>
          {/* End div */}

          <nav
            id="feature-menu"
            className="landing-mobile_menu navbar navbar-expand-sm order-md-2 "
          >
            <div className="m-auto nav-container">
              <div id="navbarSupportedContent">
              {/* scrollTargetIds={["intro",
                    "demo",
                    "feature",
                    "inner-page",
                    "choose-us",
                    "support",]}
                    offset={-65}
                    activeNavClass="active"
                    scrollDuration="1000"
                    headerBackground="true" */}
                <Scrollspy
                  className="navbar-nav"
                  id="theme-menu-list"
                  items={[
                    "intro",
                    "products",
                    "our clients",
                    "clients review",
                    "our team",
                    "support",
                  ]}
                  currentClassName="active"
                  offset={-65}
                >
                  <li className="nav-item">
                    <a href="#intro" className="nav-link">
                      Intro
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#products" className="nav-link">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#our clients" className="nav-link">
                      Our Clients
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#clients review" className="nav-link">
                      Client's Review
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#our team" className="nav-link">
                      Our team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#support" className="nav-link">
                      Support
                    </a>
                  </li>
                </Scrollspy>
              </div>
            </div>
          </nav>
          {/* #feature-menu */}

          {/* Mobile Menu Start */}
          <div className={click ? "mobile-menu menu-open" : "mobile-menu"}>
            <div className="logo order-md-1">
              <a href="#intro">
                <img src="/images/logo/deski_01.svg" alt="home-demo" />
              </a>
              <div className="fix-icon text-dark" onClick={handleClick}>
                <img src="images/icon/close.svg" alt="icon" />
              </div>
              {/* Mobile Menu close icon */}
            </div>

            <Scrollspy
              className="navbar-nav"
              id="theme-menu-list"
              items={[
                "intro",
                "products",
                "our clients",
                "clients review",
                "our team",
                "support",
              ]}
              currentClassName="active"
              offset={-200}
            >
              <li className="nav-item">
                <a href="#intro" className="nav-link" onClick={handleClick}>
                  Intro
                </a>
              </li>
              <li className="nav-item">
                <a href="#products" className="nav-link" onClick={handleClick}>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a href="#our clients" className="nav-link" onClick={handleClick}>
                  Our Clients
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#clients review"
                  className="nav-link"
                  onClick={handleClick}
                >
                  Client's Review
                </a>
              </li>
              <li className="nav-item">
                <a href="#our team" className="nav-link" onClick={handleClick}>
                  Our Team
                </a>
              </li>
              <li className="nav-item">
                <a href="#support" className="nav-link" onClick={handleClick}>
                  Support
                </a>
              </li>
            </Scrollspy>
          </div>
          {/* Mobile Menu End */}
        </div>
      </div>
    </div>
  );
};

export default Header;
