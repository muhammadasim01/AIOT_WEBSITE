import React from "react";
import Link from "next/link";

const NewsHome = ({ blogs }) => {
  return (
    <section className="blog-one blog-one__home thm-gray-bg" id="blog">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Checkout Our <span>Latest</span> <br /> News & Articles.
          </h2>
        </div>
        <div className="row">
          {blogs.map((e) => (
            <div
              className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-duration="1500ms"
              key={e._id}
            >
              <div className="blog-one__single">
                <div className="blog-one__image">
                  <img src={`/uploads/${e.Photo}`} alt="" />
                </div>
                <div className="blog-one__content">
                  <h3 className="solution_heading">{e.blogTitle}</h3>
                  <h3 className="blog-one__title">
                    <a>{e.blogContent}</a>
                  </h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link href={`/blogs/${e._id}`}>
                      <a className="blog-one__link">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href={`/blogs`}>
          <a
            className="more_blog"
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            more blogs
          </a>
        </Link>
      </div>
    </section>
  );
};
export default NewsHome;
