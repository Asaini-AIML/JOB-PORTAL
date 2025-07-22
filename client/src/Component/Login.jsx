import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Handle successful login
      })
      .catch((error) => {
        const errorMessage = error.message;
        // Handle error
      });
  }

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <button className='bg-blue px-8 text-white' onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
