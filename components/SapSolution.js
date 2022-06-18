import Link from "next/link";

const SapSolution = () => {
  return (
    <section className="blog-one blog-one__home thm-gray-bg">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">Industries We Serve</h2>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img
                  src="/assets/images/sap/Inventory.jpg"
                  alt=""
                  width="370px"
                  height="282px"
                />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">Wholesale Distribution</h3>
                <h3 className="blog-one__title">
                  <a>
                    A significant portion of your business is wholesale
                    distribution, often with some element of sales and service.
                  </a>
                </h3>
                <Link href={`/solutions/SAP Business One`}>
                  <a className="blog-one__link">Read More</a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 col-sm-12 wow fadeInDown"
            data-wow-duration="1500ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img
                  src="/assets/images/sap/sale.jpg"
                  width="370px"
                  height="282px"
                  alt=""
                />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">Commercial Service s</h3>
                <h3 className="blog-one__title">
                  <a>
                    Your business is centered around selling and servicing
                    products to companies in the commercial space.
                  </a>
                </h3>
                <Link href={`/solutions/Information Security Solutions`}>
                  <a className="blog-one__link">Read More</a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img
                  src="/assets/images/sap/engineering.jpg"
                  width="370px"
                  height="282px"
                  alt=""
                />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">Engineering </h3>
                <h3 className="blog-one__title">
                  <a>
                    Your business is mostly service-based—think time and
                    expenses—like an engineering firm.
                  </a>
                </h3>
                <Link href={`/solutions/Network Infrastructure Solutions`}>
                  <a className="blog-one__link">Read More</a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img
                  src="/assets/images/sap/Professionals.jpg"
                  width="370px"
                  height="282px"
                  alt=""
                />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">Management Consulting</h3>
                <h3 className="blog-one__title">
                  <a>
                    Your business manages all types of engagements—from your
                    most basic support projects, to large and complex projects.
                  </a>
                </h3>
                <Link href={`/solutions/Microsoft Applications Solutions`}>
                  <a className="blog-one__link">Read More</a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img
                  src="/assets/images/sap/software-tech.jpg"
                  width="370px"
                  height="282px"
                  alt=""
                />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">Software & Technology</h3>
                <h3 className="blog-one__title">
                  <a>
                    You require visibility into projects in order to understand
                    resource usage and commitments, and overall project status.
                  </a>
                </h3>
                <Link href={`/solutions/System Integrations Solutions`}>
                  <a className="blog-one__link">Read More</a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img
                  src="/assets/images/sap/it.jpg"
                  width="370px"
                  height="282px"
                  alt=""
                />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">
                  Commercial Properties Real Estate
                </h3>
                <h3 className="blog-one__title">
                  <a>
                    The Property Management for SAP Business One is a
                    comprehensive solution for owners and managers of commercial
                    real estate.
                  </a>
                </h3>
                <Link href={`/solutions/Sofware Define Solutions`}>
                  <a className="blog-one__link">Read More</a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img
                  src="/assets/images/sap/wholesale.jpg"
                  width="370px"
                  height="282px"
                  alt=""
                />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">
                  Technical Maintenance of Real Estate
                </h3>
                <h3 className="blog-one__title">
                  <a>
                    The Facility Management program is an innovative web
                    platform for maintaining technical real estate.
                  </a>
                </h3>
                <Link href={`/solutions/Sofware Define Solutions`}>
                  <a className="blog-one__link">Read More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SapSolution;
