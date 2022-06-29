import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import UserExperience from "../../components/UserExperience";
import NavOne from "../../components/NavOne";
const render = () => {
  return (
    <Layout pageTitle="User Experience">
      <NavOne />
      <PageHeader Class="inner-banner_experience" />
      <UserExperience />
    </Layout>
  );
};

export default render;
