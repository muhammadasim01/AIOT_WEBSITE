import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Cloud from "../../components/Cloud";
import NavOne from "../../components/NavOne";
const render = () => {
  return (
    <Layout pageTitle="Cloud Services">
      <NavOne />
      <PageHeader Class="inner-banner_cloud" />
      <Cloud />
    </Layout>
  );
};

export default render;
