import React from "react";
import Radium, { StyleRoot } from "radium";
const NewsDetails = ({ Photo, title, content }) => {
  const ImageStyle = {
    "@media (max-width: 991px)": {
      width: "18rem",
      height: "18rem",
    },
  };
  const container = {
    "@media (min-width: 991px)": {
      padding: "0 120px",
    },
  };
  return (
    <StyleRoot>
      <section className="blog-details container">
        <div className="blogDetailContainer" style={container}>
          <div className="">
            <div className="">
              <div className="">
                <div className="" style={{ textAlign: "center" }}>
                  <img
                    src={`/uploads/${Photo}`}
                    alt=""
                    width="480"
                    height="480"
                    style={ImageStyle}
                  />
                </div>
                <div className="">
                  <h3
                    className="banner-one__title"
                    style={{ textAlign: "center", fontSize: "1.7rem" }}
                  >
                    {title}
                  </h3>
                  <p className="banner-one__text">{content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyleRoot>
  );
};
export default NewsDetails;
