import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from 'react';

import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const Signup = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Header />

      <main>
        <form>
          <p style={{ fontSize: "23px", marginBottom: "22px" }}>Create a new account <span>🧡</span> </p>
          <input onChange={(eo) => {

            setemail(eo.target.value)
          }} required placeholder=" E-mail : " type="email" />
          <input onChange={(eo) => {

            setpassword(eo.target.value)
          }} required placeholder=" Password : " type="password" />
          <button onClick={(eo) => {
            
            eo.preventDefault();
            
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/")
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
              });
          }}>Sign up</button>
          <p className="account">
            Already hava an account <Link to="/signin"> Sign-in</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
