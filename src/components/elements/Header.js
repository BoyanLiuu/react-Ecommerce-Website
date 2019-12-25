
import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { ReactComponent as Logo } from '../../crown.svg';
import { auth } from '../../firebase/firebase.utils';
import '../styles/header.styles.scss';

const Header = ({currentUser}) => (
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



    </div>
  </div>
);

//the state is passed from root reducer, which come from user.reducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
//the first parameter could have two field, it is function that let us access the state
//use connect whenever we need property from reducer
export default connect(mapStateToProps)(Header);