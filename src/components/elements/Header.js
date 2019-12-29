
import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { ReactComponent as Logo } from '../../misc/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from '../styles/header.style';

//in this component, we accept 2 state
const Header = ({currentUser,hidden}) => (
  <HeaderContainer>
  <LogoContainer to='/'>
    <Logo className='logo' />
  </LogoContainer>
  <OptionsContainer>
    <OptionLink to='/shop'>SHOP</OptionLink>
    <OptionLink to='/shop'>CONTACT</OptionLink>
    {currentUser ? (
      <OptionLink as='div' onClick={() => auth.signOut()}>
        SIGN OUT
      </OptionLink>
    ) : (
      <OptionLink to='/signin'>SIGN IN</OptionLink>
    )}
    <CartIcon />
  </OptionsContainer>
  {hidden ? null : <CartDropdown />}
</HeaderContainer>
);

//the state is passed from root reducer, which come from user.reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
//the first parameter could have two field, it is function that let us access the state
//use connect whenever we need property from reducer
export default connect(mapStateToProps)(Header);