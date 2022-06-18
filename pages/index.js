import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Vision from "../components/Vision";
import CallToAction from "../components/CallToAction";
// import CallToActionTwo from "../components/CallToActionTwo";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Brands from "../components/Brands";
import Counter from "../components/Counter";
import Screenshots from "../components/Screenshots";
import Faq from "../components/Faq";
import NewsHome from "../components/NewsHome";
import Subscribe from "../components/Subscribe";
import Solution from "../components/Solution";
import Contact from "../components/Contactus";

const HomePage = () => (
  <Layout pageTitle="AIoT">
    <NavOne />
    <Banner />
    <Brands />
    <Vision />
    <Services />
    {/* <CallToAction /> */}
    {/* <CallToActionTwo /> */}
    {/* <Pricing /> */}
    <Solution />
    {/* <NewsHome /> */}
    <Contact />
    {/* <Testimonial /> */}
    {/* <Counter /> */}
    {/* <Screenshots /> */}
    {/* <Faq /> */}
    {/* <Subscribe /> */}
    <Footer />
  </Layout>
);

export default HomePage;
