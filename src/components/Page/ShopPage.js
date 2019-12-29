import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors'
import CollectionPage from'../Page/CollectionPage';
import { Route } from 'react-router-dom';
import CategoryPage from'../Page/CategoryPage';
//match represent what current path we are mapping
//second route represent /shop/:category
const ShopPage = ({match}) =>(
        <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionPage} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
    );



// this selector needs a part of the state  depend on the URL parameter
const mapStateToProps = (state,ownProps) =>({
        collection: selectCollection(ownProps.match.params.categoryId)(state)   
});
export default connect(mapStateToProps)(ShopPage);