import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Development from "../../components/Development";
import NavOne from "../../components/NavOne";

const render = () => {
  return (
    <Layout pageTitle="development">
      <NavOne />
      <PageHeader title="" Class="inner-banner_development" />
      <Development />
    </Layout>
  );
};

export default render;
