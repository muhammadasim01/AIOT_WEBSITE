import Layout from "../../components/Layout";
import AllBlogs from "../../components/AllBlogs";
import AdminNavbar from "../../components/AdminNavbar";
const render = () => {
  return (
    <div className="container">
      <Layout pageTitle="All Blogs">
        <AdminNavbar />

        <AllBlogs />
      </Layout>
    </div>
  );
};

export default render;
