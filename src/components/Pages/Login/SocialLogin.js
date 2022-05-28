import React from "react";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";
const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [token] = useToken(googleUser)
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;
  let from = location.state?.from?.pathname || "/";

  if (googleLoading) {
    return <Loading></Loading>;
  }

  if (googleError) {
    errorElement = <p className="text-danger">Error: {googleError?.message}</p>;
  }

  if (googleUser) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="w-full rounded-lg bg-[#FABB05] text-white py-3 mt-5 text-sm font-semibold"
        type="submit"
      >
        Google
      </button>
      {errorElement}
    </div>
  );
};

export default SocialLogin;
