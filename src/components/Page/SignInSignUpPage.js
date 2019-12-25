import React from 'react';
import SignIn from '../elements/SignIn';
import SignUp from '../elements/SignUp';
import '../styles/sign-in-and-sign-up.styles.scss';
const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
