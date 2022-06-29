import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import It from "../../components/It";
import NavOne from "../../components/NavOne";
const render = () => {
  return (
    <Layout pageTitle="IT Insfrastructure">
      <NavOne />
      <PageHeader Class="inner-banner_IT" />
      <It />
    </Layout>
  );
};

export default render;
