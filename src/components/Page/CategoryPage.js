import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../elements/CollectionItem';

import { selectCollection } from '../../redux/shop/shop.selectors';

import '../styles/category.styles.scss';

const CategoryPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='category-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


//we can see params in ownProps(second parameter)
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);