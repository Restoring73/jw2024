import React from 'react';
import { signOutUser } from '../utilities/firebaseAuth';

const SignOutButton = () => (
  <button className="btn btn-dark ms-auto" onClick={signOutUser}>
    Sign out
  </button>
);

export default SignOutButton;
