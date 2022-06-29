import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import ApplicationIntegration from "../../components/ApplicationIntegration";
import NavOne from "../../components/NavOne";
const render = () => {
  return (
    <Layout pageTitle="Application Integration">
      <NavOne />
      <PageHeader Class="inner-banner_application" />
      <ApplicationIntegration />
    </Layout>
  );
};

export default render;
