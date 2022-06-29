import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Data from "../../components/DataM&A";
import NavOne from "../../components/NavOne";
const render = () => {
  return (
    <Layout pageTitle="Data Management & Analytics">
      <NavOne />
      <PageHeader Class="inner-banner_data" />
      <Data />
    </Layout>
  );
};

export default render;
