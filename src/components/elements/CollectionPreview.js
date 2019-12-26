    
import React from 'react';
import '../styles/collection-preview.styles.scss';
import CollectionItem from './CollectionItem';
const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        //it only display 4 items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item = {item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;