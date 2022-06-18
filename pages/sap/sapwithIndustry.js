import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import SapSolution from "../../components/SapSolution";

const render = () => (
  <Layout pageTitle="Sap with industry">
    {/* <NavOne /> */}
    <PageHeader title="Sap With Industry" Class="inner-banner_sap" />
    <p className="banner-one__text" style={{ margin: "6rem 12rem 0 12rem" }}>
      Every business is unique, with its own set of challenges, processes and
      reporting requirements, but many problems are common across industry
      sectors. In addition to core SAP Business One functionality, our industry
      solutions integrate seamlessly to provide extended functionality specific
      to the needs of your business. We have customers in a variety of
      industries already using SAP Business One solutions tailored to fit their
      specific needs. Let us do the same for you. Don’t see your industry listed
      below? No need to worry. SAP Business One is designed to work with small
      and mid-size businesses across all industries – even those with truly
      unique needs.
    </p>
    <SapSolution />
    <Footer />
  </Layout>
);

export default render;
