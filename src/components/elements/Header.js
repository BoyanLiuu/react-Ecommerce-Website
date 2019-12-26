
import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { ReactComponent as Logo } from '../../misc/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import '../styles/header.styles.scss';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


//in this component, we accept 2 state
const Header = ({currentUser,hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>

      {
        currentUser ? <div className ='option' onClick ={()=>auth.signOut()}> SIGNOUT</div> : <Link className="option" to='/signin'>SIGN IN</Link>

      }

      <CartIcon/> 

    </div>
    { hidden ? null :<CartDropdown/>}    
  </div>
);

//the state is passed from root reducer, which come from user.reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
//the first parameter could have two field, it is function that let us access the state
//use connect whenever we need property from reducer
export default connect(mapStateToProps)(Header);