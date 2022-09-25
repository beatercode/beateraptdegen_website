import "./Navigation.css";

import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="navbar">
      <Container>
        <div className="headerlogo">
          <div className="color-button silenced" data-theme="silenced">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35.061"
              height="35.062"
              viewBox="0 0 35.061 35.062"
            >
              <path
                fill="#ef795b !important"
                d="M15.921 17.531l1.609-1.609 1.61 1.609-1.61 1.61zM27.127 0l-9.6 9.6L7.933 0 4.771 3.163l9.6 9.6-1.61 1.61-9.6-9.6L0 7.934l9.6 9.6L0 27.127l3.161 3.162 9.6-9.6 1.61 1.609-9.6 9.6 3.162 3.162 9.6-9.6 9.6 9.6 3.156-3.16-9.6-9.6 1.61-1.609 9.6 9.6 3.161-3.162-9.6-9.6 9.6-9.6-3.16-3.157-9.6 9.6-1.609-1.61 9.6-9.6z"
                data-name="Path 54"
              ></path>
            </svg>
          </div>
          <div className="color-button warlord" data-theme="warlord">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.513"
              height="33.423"
              viewBox="0 0 33.513 33.423"
            >
              <g
                fill="#95C183 !important"
                data-name="Group 309"
                transform="translate(-6798.189 -9899.838)"
              >
                <path
                  d="M71.882.965l-7.8 7.8 7.8 7.8 7.8-7.8zm-1.654 7.8l1.654-1.654 1.654 1.654-1.654 1.654z"
                  data-name="Path 50"
                  transform="translate(6743.064 9898.873)"
                ></path>
                <path
                  d="M71.882 23.208l-7.8 7.8 7.8 7.8 7.8-7.8zm-1.654 7.8l1.654-1.654 1.654 1.654-1.654 1.654z"
                  data-name="Path 51"
                  transform="translate(6743.064 9894.458)"
                ></path>
                <path
                  d="M83.059 12.144l-7.8 7.8 7.8 7.8 7.8-7.8zm-1.653 7.8l1.654-1.654 1.654 1.654-1.653 1.656z"
                  data-name="Path 52"
                  transform="translate(6740.846 9896.654)"
                ></path>
                <path
                  d="M60.7 12.144l-7.8 7.8 7.8 7.8 7.8-7.8zm-1.654 7.8l1.654-1.657 1.654 1.654L60.7 21.6z"
                  data-name="Path 53"
                  transform="translate(6745.283 9896.654)"
                ></path>
              </g>
            </svg>
          </div>
          <div className="color-button soulstealer" data-theme="soulstealer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.513"
              height="33.514"
              viewBox="0 0 33.513 33.514"
            >
              <path
                fill="#f58abf !important"
                d="M112.519 20.423v-5.4l9.573-9.573h5.4l9.573 9.573v5.4L127.493 30h-5.4zM120.234.966l-12.2 12.2v9.114l12.2 12.2h9.114l12.2-12.2v-9.113l-12.2-12.2z"
                data-name="Path 49"
                transform="translate(-108.036 -.966)"
              ></path>
            </svg>
          </div>
          <div className="color-button assassin" data-theme="assassin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38.697"
              height="33.514"
              viewBox="0 0 38.697 33.514"
            >
              <path
                fill="#141414 !important"
                d="M187.425 18.676l5.182 8.974-1.215 2.1H166.04l-1.214-2.1 5.181-8.974 8.709 4.991zm-15.055-4.094l5.13-8.889h2.428l5.132 8.889-6.346 3.636zm2.4-13.616l-15.403 26.683 3.943 6.83h30.811l3.943-6.828L182.659.966z"
                data-name="Path 48"
                transform="translate(-159.367 -.966)"
              ></path>
            </svg>
          </div>
        </div>
        <Navbar.Toggle
          className="toggler"
          aria-controls="responsive-navbar-nav"
        >
          <div className="menu-icon hover-target d-md-block d-lg-none">
            <span className="menu-icon__line menu-icon__line-left"></span>
            <span className="menu-icon__line"></span>
            <span className="menu-icon__line menu-icon__line-right"></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Link to="/">Home</Link>
          <a href="https://twitter.com/OninousProject">Twitter</a>
          <Link to="/mint">
            <Button className="button">Invest in onis today</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
