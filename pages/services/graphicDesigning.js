import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Graphic from "../../components/Graphic";
import NavOne from "../../components/NavOne";
const render = () => {
  return (
    <Layout pageTitle="Graphic Designing">
      <NavOne />
      <PageHeader Class="inner-banner_graphic" />
      <Graphic />
    </Layout>
  );
};

export default render;
