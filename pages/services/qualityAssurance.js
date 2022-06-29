import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Quality from "../../components/Quality";
import NavOne from "../../components/NavOne";
const render = () => {
  return (
    <Layout pageTitle="Quality Assurance">
      <NavOne />
      <PageHeader Class="inner-banner_quality" />
      <Quality />
    </Layout>
  );
};

export default render;
