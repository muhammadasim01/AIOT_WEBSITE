import Layout from "../../components/Layout";
import AdminNavbar from "../../components/AdminNavbar";
import Signup from "../../components/Signup";
const render = () => {
  return (
    <div className="container">
      <Layout pageTitle="sign up">
        <AdminNavbar />
        <br />
        <br />
        <br />
        <Signup />
      </Layout>
    </div>
  );
};

export default render;
