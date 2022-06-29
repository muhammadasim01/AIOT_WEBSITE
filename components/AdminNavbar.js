import React, { Component } from "react";
import Link from "next/link";

export default class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
      logIn: true,
      logOut: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.mobileMenu();
    const token = sessionStorage.getItem("token");
    if (token) {
      this.setState({
        logIn: false,
        logOut: true,
      });
    } else {
      this.setState({
        logIn: true,
        logOut: false,
      });
    }
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
              <Link className="navbar-brand d-flex align-items-center" href="/">
                <>
                  <img
                    src="/assets/images/resources/aiot.png"
                    className="main-logo"
                    width="119"
                    alt="Awesome Image"
                  />
                  <h2 className="display-6 text-danger">ADMIN</h2>
                </>
              </Link>
              <button className="menu-toggler">
                <span className="fa fa-bars"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" one-page-scroll-menu navigation-box">
                <li
                  className="current scrollToLink"
                  onClick={() => sessionStorage.removeItem("token")}
                >
                  <Link href="/">Home</Link>
                </li>
                <li className="current scrollToLink">
                  <Link href="/admin/allBlogs">All Blog</Link>
                </li>
                <li className="current scrollToLink">
                  <Link href="/admin/addBlog">Add Blog</Link>
                </li>
                <li className="current scrollToLink">
                  <Link href="/admin/signup">Sign Up</Link>
                </li>
                {this.state.logIn && (
                  <li className="current scrollToLink">
                    <Link href="/admin/login">Login</Link>
                  </li>
                )}
                {this.state.logOut && (
                  <li
                    className="current scrollToLink"
                    onClick={() => sessionStorage.removeItem("token")}
                  >
                    <Link href="/admin/login">Logout</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
