import React from 'react';

import FormInput from '../elements/FormInput';
import CustomButton from '../elements/Button';
import {auth,signInWithGoogle } from '../../firebase/firebase.utils';
import '../styles/sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    //store data into store
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      //if it is successed we will clear state.
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
    
  };

  handleChange = event => {
    //capture use input
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
          </div>

        </form>
      </div>
    );
  }
}

export default SignIn;