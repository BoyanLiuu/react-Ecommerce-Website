    
import React from 'react';

import '../styles/custom-buttom.styles.scss';

//...otherProps mainly hanld type ="submit" function
const Button = ({ children, isGoogleSignIn,...otherProps }) => (
  <button
  className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
  {...otherProps}>
  {children}
</button>
);

export default Button;