import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [resetPass, setresetPass] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");
  const [showForm, setshowForm] = useState("");
  const [showSendEmail, setshowSendEmail] = useState(false);


const forgotPassword = () => {
  setshowForm("show-forgot-password");
}

const signInBTN = (eo) => {
  eo.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      navigate("/");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;

      sethasError(true);

      switch (errorCode) {
        case "auth/invalid-email":
          setfirebaseError("Wrong Email");
          break;

        case "auth/user-not-found":
          setfirebaseError("Wrong Email");
          break;

        case "auth/wrong-password":
          setfirebaseError("Wrong Password");
          break;

        case "auth/too-many-requests":
          setfirebaseError(
            "Too many requests, please try aganin later"
          );
          break;

        default:
          setfirebaseError("Please check your email & password");
          break;
      }
    });
}


  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>
        <form className={`forgot-password ${showForm}`}>
          <div
            onClick={() => {
              setshowForm("");
            }}
            className="close"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>

          <input onChange={(eo) => {
            setresetPass(eo.target.value)
          }} required placeholder=" E-mail : " type="email" />
          <button
            onClick={(eo) => {
              eo.preventDefault();
            
              sendPasswordResetEmail(auth, resetPass)
                .then(() => {
                  console.log("send email")
                  setshowSendEmail(true);
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode)
                  // ..
                });
            }}
          >
            Reset Password
          </button>
          {showSendEmail && (
            <p className="check-email">
              Please check your email to reset your password.
            </p>
          )}
        </form>

        <form>
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            required
            placeholder=" E-mail : "
            type="email"
          />

          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            required
            placeholder=" Password : "
            type="password"
          />

          <button
            onClick={(eo) => {
              signInBTN(eo)
            }}
          >
            Sign in
          </button>
          <p className="account">
            Don't hava an account <Link to="/signup"> Sign-up</Link>
          </p>

          <p
            onClick={() => {
              forgotPassword()
            }}
            className="forgot-pass"
          >
            Forgot password ?
          </p>

          {hasError && <h2>{firebaseError}</h2>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
