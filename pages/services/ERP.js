import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import ERP from "../../components/ERP";
import NavOne from "../../components/NavOne";

const render = () => {
  return (
    <Layout pageTitle="Enterprise Resource Planning">
      <NavOne />
      <PageHeader Class="inner-banner_erp" />
      <ERP />
    </Layout>
  );
};

export default render;
