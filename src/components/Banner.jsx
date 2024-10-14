import React from 'react';
import { useAuthState } from '../utilities/firebaseAuth';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';

const Banner = ({ title }) => {
  const [user] = useAuthState();

  return (
    <div className="banner">
      <h1>{title}</h1>
      {user ? <SignOutButton /> : <SignInButton />}
    </div>
  );
};

export default Banner;
