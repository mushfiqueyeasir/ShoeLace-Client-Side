import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../components/Loading/Loading";
import auth from "../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (
    !user?.emailVerified &&
    user?.providerData[0]?.providerId === "password"
  ) {
    return (
      <div className="container verification d-flex flex-column align-items-center  my-5">
        <h3 className="text-danger text-center">
          Your Email is not Verified!!
        </h3>
        <h5 className="text-success text-center mt-2">
          Please Verify you Email address
        </h5>
        <div className="mt-5 d-flex align-items-center">
          <p className="m-0 fw-bold text-danger">
            didn't get verification email?
          </p>
          <button
            onClick={async () => {
              await sendEmailVerification(auth);
              toast("Verification Email Sent!!");
            }}
            className="btn btn-info ms-3"
          >
            Send Verification again
          </button>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/join" state={{ from: location }} replace />;
  } else return children;
};

export default RequireAuth;
