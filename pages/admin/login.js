import Layout from "../../components/Layout";
import AdminNavbar from "../../components/AdminNavbar";
import Login from "../../components/Login";
const render = () => {
  return (
    <div className="container">
      <Layout pageTitle="login">
        <AdminNavbar />
        <br />
        <br />
        <br />
        <Login />
      </Layout>
    </div>
  );
};

export default render;
