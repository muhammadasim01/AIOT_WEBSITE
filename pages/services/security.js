import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Security from "../../components/Security";
import NavOne from "../../components/NavOne";
const render = () => {
  return (
    <Layout pageTitle="Security">
      <NavOne />
      <PageHeader Class="inner-banner_security" />
      <Security />
    </Layout>
  );
};

export default render;
