import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import NewsDetails from "../components/NewsDetails";
import Footer from "../components/Footer";

const NewsDetailsPage = () => (
  <Layout pageTitle="Dimon | News Details">
    <NavOne />
    <PageHeader title="News Details" />
    <NewsDetails />
    <Footer />
  </Layout>
);

export default NewsDetailsPage;
