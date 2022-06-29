import React from "react";
import Solution from "./Solution";
import SapSolution from "./SapSolution";

const ERP = () => {
  return (
    <div className="container mt-5">
      <h6 className="banner_one__main_title text-center">
        Enterprise Resource Planning
      </h6>
      <p className="banner-one__text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
        iste? Explicabo nam molestiae natus tempora praesentium animi sint
        sapiente reprehenderit excepturi nulla provident ducimus consequuntur
        magni, atque rerum culpa laboriosam optio voluptate accusantium fugit
        quod obcaecati doloremque? Soluta rerum similique maiores est maxime,
        accusamus ipsa at id cupiditate in incidunt.
      </p>
      <br />
      <br />

      <h6 className="text-center banner_one_title">Microsoft Dynamics</h6>
      <p className="banner-one__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quam qui
        ipsam expedita earum voluptas optio ea totam debitis quo?
      </p>
      <br />
      <br />

      <h6 className="text-center banner_one_title">SAP Business One</h6>
      <p className="banner-one__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quam qui
        ipsam expedita earum voluptas optio ea totam debitis quo?
      </p>
      <br />
      <br />

      <h6 className="text-center banner_one_title">Solutions</h6>
      <Solution />
      <br />
      <br />

      <h6 className="text-center banner_one_title">SAP With Industries</h6>
      <p className="banner-one__text">
        Every business is unique, with its own set of challenges, processes and
        reporting requirements, but many problems are common across industry
        sectors. In addition to core SAP Business One functionality, our
        industry solutions integrate seamlessly to provide extended
        functionality specific to the needs of your business. We have customers
        in a variety of industries already using SAP Business One solutions
        tailored to fit their specific needs. Let us do the same for you. Don’t
        see your industry listed below? No need to worry. SAP Business One is
        designed to work with small and mid-size businesses across all
        industries – even those with truly unique needs.
      </p>
      <br />
      <br />

      <SapSolution />
      <div className="site-footer__bottom">
        <div className="container">
          <div className="inner-container text-center">
            <p className="site-footer__copy">
              &copy; copyright 2022 by <a href="#">aiot.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERP;
