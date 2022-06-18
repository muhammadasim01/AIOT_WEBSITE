import React from "react";

const Banner = () => {
  return (
    <section className="banner-one" id="banner">
      <span className="banner-one__shape-1"></span>
      <span className="banner-one__shape-2"></span>
      <span className="banner-one__shape-3"></span>
      <span className="banner-one__shape-4"></span>
      <div className="container">
        <div className="banner-one__moc">
          <img src="/assets/images/resources/aiot.png" alt="Awesome Image" />
        </div>
        <div className="row banner_row">
          <div className="col-xl-6 col-lg-8 Banner_container">
            <div className="banner-one__content">
              <h3 className="banner-one__title">
                Artificial
                <br />
                <span>Intelligence</span> Of <br /> Things.
              </h3>
              <p className="banner-one__text">
                Your IT partner for SAP Optimization, Data and Network Security,
                Virtualization, Cloud Hosting, Desktop/Web/Android/IOS
                Development, and other business solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
