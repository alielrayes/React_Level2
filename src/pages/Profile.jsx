import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import Moment from "react-moment";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }
  });

  if (loading) {
    return (
      <div>
        <Header />
        <main>
          <h2>Loading.......................</h2>
        </main>

        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (user) {
    return (
      <>
        <Helmet>
          <title>Profile</title>

          <style type="text/css">{` 
        main{
          flex-direction: column;
          align-items: flex-start;
  
    width: fit-content;
    margin: auto;
        }

        .delete{
          margin-top: 25px;
        background-color:  #dc3545;
        padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    border-color: #dc3545;
        }
        
        `}</style>
        </Helmet>
        <Header />

        <main>
          <h6>Email: {user.email}</h6>
          <h6>UserName: {user.displayName}</h6>

          <h6>
            Last Sign-in :{" "}
            <Moment fromNow date={user.metadata.lastSignInTime} />{" "}
          </h6>

          <h6>
            Account Created :{" "}
            <Moment fromNow date={user.metadata.creationTime} />
          </h6>
          <button className="delete">Delete account</button>
        </main>
        <Footer />
      </>
    );
  }
};

export default Profile;
