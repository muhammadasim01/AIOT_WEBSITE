import Link from "next/link";
const Services = () => {
  return (
    <section className="service-one" id="Services">
      <br />
      <br />
      <br />
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Our <span>Product</span> & <span>Services</span>
          </h2>
        </div>
        <div className="row">
          <Link href="/services/development">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single text-center">
                <div className="service-one__inner">
                  <i className="service-one__icon dimon-icon-laptop"></i>
                  <h3>
                    <a href="#">Development</a>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/ERP">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single text-center">
                <div className="service-one__inner">
                  <i className="service-one__icon dimon-icon-human-resources"></i>
                  <h3>
                    <a href="#">ERP</a>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/customMadeSolution">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single text-center">
                <div className="service-one__inner">
                  <i className="service-one__icon dimon-icon-strategy"></i>
                  <h3>
                    <a href="#">Custom made solution</a>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/cloudServices">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single text-center">
                <div className="service-one__inner">
                  <i className="service-one__icon dimon-icon-data1"></i>
                  <h3>
                    <a href="#">Cloud services</a>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/digitalMarketing">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single text-center">
                <div className="service-one__inner">
                  <i className="service-one__icon dimon-icon-target"></i>
                  <h3>
                    <a href="#">Digital Marketing</a>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/graphicDesigning">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single text-center">
                <div className="service-one__inner">
                  <i className="service-one__icon dimon-icon-training"></i>
                  <h3>
                    <a href="#">Graphic Designing</a>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/qualityAssurance">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single text-center">
                <div className="service-one__inner">
                  <i className="service-one__icon dimon-icon-visualization"></i>
                  <h3>
                    <a href="#">Quality Assurance</a>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/applicationIntegration">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single text-center">
                <div className="service-one__inner">
                  <i className="service-one__icon dimon-icon-laptop"></i>
                  <h3>
                    <a href="#">Application Integration</a>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/dataManagementAndAnalytics">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single text-center">
                <div className="service-one__inner">
                  <i className="service-one__icon dimon-icon-data"></i>
                  <h3>
                    <a href="#">Data Management & Analytics</a>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/itInsfrastructure">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single text-center">
                <div className="service-one__inner">
                  <i className="service-one__icon dimon-icon-data1"></i>
                  <h3>
                    <a href="#">IT Insfrastructure</a>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/security">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single text-center">
                <div className="service-one__inner">
                  <i className="service-one__icon dimon-icon-strategy"></i>
                  <h3>
                    <a href="#">Security</a>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/services/userExperience">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
              data-wow-duration="1500ms"
            >
              <div className="service-one__single text-center">
                <div className="service-one__inner">
                  <i className="service-one__icon dimon-icon-data1"></i>
                  <h3>
                    <a href="#">User Experience</a>
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Services;
