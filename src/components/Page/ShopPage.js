import React from 'react';
import {connect} from 'react-redux';
import {selectCollections} from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect';
import CollectionPage from'../Page/CollectionPage';
const ShopPage = ({collections}) =>(
        <div className='shop-page'>
           <CollectionPage/>
        </div>
    );




const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})
export default connect(mapStateToProps)(ShopPage);