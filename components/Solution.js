import Link from "next/link";

const Solution = () => {
  return (
    <section className="blog-one blog-one__home thm-gray-bg" id="solution">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src="/assets/images/solution/sap.gif" alt="" />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">SAP Business One</h3>
                <h3 className="blog-one__title">
                  <a>
                    To increase the usefulness of SAP, you’ll utilize SAP
                    add-ons. Once you proceed utilizing add-ons, you must enlist
                    and download add-ons on your SAP Trade One workstation.
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
                <img src="/assets/images/solution/security.gif" alt="" />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">
                  Information Security Solutions
                </h3>
                <h3 className="blog-one__title">
                  <a>
                    Our experts will assist you to define and deploy a
                    comprehensive security methodology for your organization
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
                <img src="/assets/images/solution/network.gif" alt="" />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">
                  Network Infrastructure Solutions
                </h3>
                <h3 className="blog-one__title">
                  <a>
                    Our professional and technical representatives are highly
                    skilled and experienced in designing, implementing and
                    maintaining your network infrastructure requirements.
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
                <img src="/assets/images/solution/microsoft.gif" alt="" />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">
                  Microsoft Applications Solutions
                </h3>
                <h3 className="blog-one__title">
                  <a>
                    AIoTis and Microsoft are working together, helping our
                    clients to attain their business goals through innovative
                    solutions.
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
                <img src="/assets/images/solution/system.gif" alt="" />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">
                  System Integrations Solutions
                </h3>
                <h3 className="blog-one__title">
                  <a>
                    AIoTis offers a wide range of comprehensive virtualization
                    and consolidation solutions from software and services to
                    hardware platforms to assist bring cost-effectiveness
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
                <img src="/assets/images/solution/networking.gif" alt="" />
              </div>
              <div className="blog-one__content">
                <h3 className="solution_heading">Sofware Define Solutions</h3>
                <h3 className="blog-one__title">
                  <a>
                    Solutions that automate IT operations and streamline the
                    management of resources, workloads, and apps.
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

export default Solution;
