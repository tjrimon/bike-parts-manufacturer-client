
import React, { useRef } from 'react';
import SocialLogin from './SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';
import useToken from '../../../hooks/useToken';




const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const location = useLocation();
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user)

  let from = location.state?.from?.pathname || "/";
  let errorMessage;


  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (loading) {
    return <Loading></Loading>
  }
  if (token) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorMessage = <p className='text-danger'>Error: {error?.message}</p>
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post('http://localhost:5000/login', { email })
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Password Reset Email Send !');
    }
    else {
      toast('Please enter your email.');
    }
  }

  return (
    <div className="bg-gray-100">
      <div className="md:w-[800px] mx-auto md:h-[85vh] pb-20 md:flex justify-center items-center">
        <div className="w-[320px] py-20 mx-auto md:mr-auto">
          <SocialLogin></SocialLogin>
        </div>
        <div className="w-[20rem] md:ml-auto mx-auto md:w-96 bg-gray-200 py-10 px-10 rounded-lg">
          <form onSubmit={handleSubmit}>
            <h1 className="pb-3 font-semibold text-xl ">Login Here</h1>
            <div className="">
              <label htmlhtmlhtmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                ref={emailRef}
                required
                className="block border-gray-300 rounded-lg mt-1 mb-3 w-full focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2.5"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="">
              {" "}
              <label htmlhtmlhtmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <input
                required
                ref={passwordRef}
                type="password"
                className="block border-gray-300 rounded-lg mt-1 mb-3 w-full px-4 py-2.5"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <p className="text-red-500">{errorMessage}</p>
            <button
              className="w-full rounded-lg bg-primary text-white py-3 mt-5 text-sm font-semibold"
              type="submit"
            >
              Login
            </button>
            <p className="pt-7">
              {" "}
              New Here ?{" "}
              <span className="font-semibold text-primary">
                <Link to="/registration">Sign up</Link>
              </span>
            </p>
          </form>
          <p className="pt-7">
            {" "}
            forget Password ?{" "}
            <button
              onClick={resetPassword}
              className="text-red-700 font-semibold"
            >
              Reset Password
            </button>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
