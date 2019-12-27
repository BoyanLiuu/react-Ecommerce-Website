import React from 'react';
import{ connect} from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../misc/shopping-bag.svg';
import '../styles/cart-icon.styles.scss'
import { toggleCartHidden} from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
const CartIcon = ({ toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );

//get state from redux
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

//use reselect library 
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartIcon);