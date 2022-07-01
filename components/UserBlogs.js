import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AllBlogs = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getItem = async () => {
    const response = await axios.get("/api/get");
    const res = response.data;
    setData(res);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);

    getItem();
  }, []);
  const deleteBlog = async (id) => {
    const response = await axios.delete(`/api/deleteblog/${id}`);
    const res = await response.data;
    getItem();
    console.log(res);
  };
  return (
    <section className="blog-one">
      <h1 className="display-3 text-center">All blogs</h1>
      <br />
      {loading ? (
        <h2 className="text-center">loading....</h2>
      ) : (
        <div className="container">
          {data.length >= 1 ? (
            <div className="row">
              {data.map((e) => (
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
          ) : (
            <h3 className="display-5 text-center">No Blogs Found....</h3>
          )}
        </div>
      )}
      <div className="site-footer__bottom">
        <div className="container">
          <div className="inner-container text-center">
            <p className="site-footer__copy">
              &copy; copyright 2022 by <a href="#">aiot.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
