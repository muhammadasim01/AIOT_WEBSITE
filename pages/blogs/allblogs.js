import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import UserBlog from "../../components/UserBlogs";
const render = () => {
  return (
    <div className="container">
      <Layout pageTitle="All Blogs">
        <NavOne />

        <UserBlog />
      </Layout>
    </div>
  );
};

export default render;
