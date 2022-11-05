import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';



const About = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  
  
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <Helmet>
        <title>About Page</title>
         
      </Helmet>
      <Header />
      <MainContent pageName="About Page" />
      <Footer />
    </>
  );
};

export default About;
