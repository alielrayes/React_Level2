import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';
import { useState } from 'react';



const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>

        <form>


          <input onChange={(eo) => {
            setemail(eo.target.value)
          }} required placeholder=" E-mail : " type="email" />



          <input onChange={(eo) => {
            setpassword(eo.target.value)
          }} required placeholder=" Password : " type="password" />




          <button onClick={(eo) => {
            eo.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
              });
          }}>Sign in</button>
          <p className="account">
            Don't hava an account <Link to="/signup"> Sign-up</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
