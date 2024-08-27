import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faLaptopCode, faListCheck, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import '../NavbarComponent/Navbar.css';

export default class Navbar extends Component {
  handleNavigation = (event) => {
    const nodeList = document.querySelectorAll(".nav-link, .navbar-brand");
    nodeList.forEach((node) => node.classList.remove("active"));
    event.currentTarget.classList.add("active");
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="navbar-brand" href="#" onClick={this.handleNavigation}>
                  <FontAwesomeIcon icon={faHome} className="home-icon" />
                </a>
                <a className="nav-link" aria-current="page" href="#" onClick={this.handleNavigation}>
                  <FontAwesomeIcon icon={faUser} className="home-icon" />
                </a>
                <a className="nav-link" href="#" onClick={this.handleNavigation}>
                  <FontAwesomeIcon icon={faLaptopCode} className="home-icon" />
                </a>
                <a className="nav-link" href="#" onClick={this.handleNavigation}>
                  <FontAwesomeIcon icon={faListCheck} className="home-icon" />
                </a>
                <a className="nav-link" href="#" onClick={this.handleNavigation}>
                  <FontAwesomeIcon icon={faNoteSticky} className="home-icon" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
