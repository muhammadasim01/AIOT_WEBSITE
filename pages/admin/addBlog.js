import Layout from "../../components/Layout";
import AddBlog from "../../components/AddBlog";
import AdminNavbar from "../../components/AdminNavbar";
const render = () => {
  return (
    <div className="container">
      <Layout pageTitle="Add Blogs">
        <AdminNavbar />
        <br />
        <br />
        <br />
        <AddBlog />
      </Layout>
    </div>
  );
};

export default render;
