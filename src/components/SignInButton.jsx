import React from 'react';
import { signInWithGoogle } from '../utilities/firebaseAuth';

const SignInButton = () => (
  <button className="btn btn-dark ms-auto" onClick={signInWithGoogle}>
    Sign in with Google
  </button>
);

export default SignInButton;
