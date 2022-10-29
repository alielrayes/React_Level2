import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta name="description" content="csssssssssssssssssssss" />
      </Helmet>

      <Header />

      <MainContent pageName="CSS Page" />

      <Footer />
    </>
  );
};

export default Css;
