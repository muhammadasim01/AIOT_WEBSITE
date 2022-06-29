import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import CMS from "../../components/CMS";
import NavOne from "../../components/NavOne";
const render = () => {
  return (
    <Layout pageTitle="Custom made solutions">
      <NavOne />
      <PageHeader Class="inner-banner_custom" />
      <CMS />
    </Layout>
  );
};

export default render;
