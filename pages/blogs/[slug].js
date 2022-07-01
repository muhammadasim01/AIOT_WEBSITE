import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BlogDetail from "../../components/BlogDetail";
import NavOne from "../../components/NavOne";
import axios from "axios";
import Layout from "../../components/Layout";

const Post = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  var slug;
  slug = router.query.slug;

  useEffect(() => {
    getBlogDetails(slug);
  }, [slug]);
  const getBlogDetails = async (slug) => {
    const response = await axios.get(`/api/blogs/${slug}`);
    const [res] = await response.data;
    setData(res);
  };

  return (
    <Layout pageTitle={data ? data.blogTitle : "blog"}>
      <NavOne />
      {data ? (
        <BlogDetail
          Photo={data.Photo}
          title={data.blogTitle}
          content={data.blogContent}
        />
      ) : (
        <h1 className="text-center" style={{ marginTop: "12rem" }}>
          loading.....
        </h1>
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
    </Layout>
  );
};

export default Post;
