import React, { Component } from "react";
import Link from "next/link";

export default class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display != "block" ? "block" : "none";
    });
  };

  render() {
    return (
      <header className="site-header site-header__header-one">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <a className="navbar-brand" href="/">
                <img
                  src="/assets/images/resources/aiot.png"
                  className="main-logo"
                  width="119"
                  alt="Awesome Image"
                />
              </a>
              <button className="menu-toggler">
                <span className="fa fa-bars"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" one-page-scroll-menu navigation-box">
                <li className="current scrollToLink">
                  <a href="/">Home</a>
                </li>
                <li className="scrollToLink">
                  <a href="/#vision">Our Goals</a>
                </li>
                <li className="scrollToLink">
                  <a href="/#Services">Services</a>
                </li>
                <li className="scrollToLink">
                  <a href="/#blog">blog</a>
                </li>
                <li className="scrollToLink">
                  <a href="/#contact">Contact us</a>
                </li>

                <li className="scrollToLink">
                  <a href="https://probook247.com/" target="_blank">
                    probook 247
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
