import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

const SolutionDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout pageTitle={`${slug}`}>
      {/* <NavOne /> */}
      <PageHeader title={`${slug}`} Class="inner-banner" />
      <Footer />
    </Layout>
  );
};

export default SolutionDetails;
