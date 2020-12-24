import React from 'react';
import './style.scss';
import ProductHeader from './productHeader';
import ProductItem from './productItem';
import SearchBar from '../manage/searchBar';
import axios from 'axios'
const Products = () => {
  return (
    <section className='products'>
      <div className='container section__container'>
        <ProductHeader />
        <SearchBar />
        <div className='row products__wrapper'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </section>
  );
};

export default Products;