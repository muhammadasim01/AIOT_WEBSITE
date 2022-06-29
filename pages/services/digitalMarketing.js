import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Digital from "../../components/Digital";
import NavOne from "../../components/NavOne";
const render = () => {
  return (
    <Layout pageTitle="Digital Marketing">
      <NavOne />
      <PageHeader Class="inner-banner_digitalmarketing" />
      <Digital />
    </Layout>
  );
};

export default render;
