import React, { useState } from 'react';
import shop_data from '../../data';
import CollectionPreview from'../elements/CollectionPreview'

const ShopPage = () =>{
    const[collection, setCollection]= useState(shop_data);
      return (
        <div className='shop-page'>
        {
            collection.map(({id, ...otherProps})=>(
                <CollectionPreview key ={id} {...otherProps}/>
            ))
        }
           
        </div>
    );


}

export default ShopPage;