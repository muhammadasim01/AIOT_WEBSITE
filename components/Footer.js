import React, { Component } from "react";
import Link from "next/link";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      scrollBtn: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 70) {
      this.setState({
        scrollBtn: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        scrollBtn: false,
      });
    }
  }

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <footer className="site-footer">
          <div className="site-footer__upper">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="footer-widget footer-widget__about">
                    <img
                      src="/assets/images/resources/aiot.png"
                      width="119"
                      alt=""
                      className="footer-widget__logo"
                    />
                    <p className="footer-widget__contact">
                      <a href="tel:888-666-0000">+92 312 345 6778</a>
                    </p>

                    <p className="footer-widget__contact">
                      <a href="mailto:needhelp@example.com">
                        bd@aiotpl.com; info@aiotpl.com
                      </a>
                    </p>
                    <p className="footer-widget__contact">
                      Working Days / Hours: Mon - Friday / 10:00 AM - 07:00 PM
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-between footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="footer-widget__links list-unstyled">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="/#vision">Goals</a>
                      </li>
                      <li>
                        <a href="/#Services">Services</a>
                      </li>
                      <li>
                        <a href="/#blog">Blog</a>
                      </li>
                      <li>
                        <a href="/#contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Services</h3>
                    <ul className="footer-widget__links list-unstyled">
                      <li>
                        <Link href="/services/development">Development</Link>
                      </li>
                      <li>
                        <Link href="/services/ERP">ERP </Link>
                      </li>
                      <li>
                        <Link href="/services/customMadeSolution">
                          Custom made solution
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/cloudServices">
                          Cloud servicesg
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/digitalMarketing">
                          Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/graphicDesigning">
                          Graphic Designing
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/qualityAssurance">
                          Quality Assurance
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/applicationIntegration">
                          Application Integration
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/dataManagementAndAnalytics">
                          Data Management & Analytics
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/itInsfrastructure">
                          IT Insfrastructure
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/security">Security</Link>
                      </li>
                      <li>
                        <Link href="/services/userExperience">
                          User Experience
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Links</h3>
                    <ul className="footer-widget__links list-unstyled">
                      <li>
                        <a style={{ cursor: "pointer" }}>Help </a>
                      </li>
                      <li>
                        <a style={{ cursor: "pointer" }}>Support </a>
                      </li>
                      <li>
                        <a style={{ cursor: "pointer" }}>Clients </a>
                      </li>
                      <li>
                        <a href="/#contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer-widget">
                    <div className="site-footer__social">
                      <a
                        href="https://www.facebook.com/aiotpl"
                        className="fa fa-facebook-square"
                        target="_blank"
                      ></a>
                      <a
                        href="https://twitter.com/AIoTpl"
                        className="fa fa-twitter"
                        target="_blank"
                      ></a>
                      <a
                        href="https://www.instagram.com/AIoTpl/"
                        className="fa fa-instagram"
                        target="_blank"
                      ></a>
                      <a
                        href="https://www.linkedin.com/company/aiotpl/mycompany/verification/"
                        className="fa fa-linkedin"
                        target="_blank"
                      ></a>
                      <a
                        href="https://www.youtube.com/channel/UCRp7C80I-WjdgbN6y66I5Ug?view_as=subscriber"
                        className="fa fa-youtube"
                        target="_blank"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="container">
              <div className="inner-container text-center">
                <p className="site-footer__copy">
                  &copy; copyright 2022 by <a href="#">aiot.com</a>
                </p>
              </div>
            </div>
          </div>
        </footer>

        <div
          onClick={this.scrollTop}
          className="scroll-to-target scroll-to-top"
          style={{ display: this.state.scrollBtn ? "block" : "none" }}
        >
          <i className="fa fa-angle-up"></i>
        </div>
      </div>
    );
  }
}
