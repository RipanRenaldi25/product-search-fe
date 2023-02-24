import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf } from 'prop-types';
import ProductItem from './ProductItem';

function ProductsList({ products }) {
  return (
    <article className="w-9/12 flex justify-around flex-wrap ">
      { !products.length && <h1>Data Tidak Ditemukan</h1> }
      {products.map((product) => (
        <Link to={`/detail/${product.id}`} className="basis-1/6 h-60 object-cover mb-5 mr-1 shadow-lg rounded-lg overflow-hidden relative" key={product.id} id={product.id}>
          <ProductItem title={product.title} thumbnail={product.thumbnail} price={product.price} />
        </Link>
      ))}
    </article>
  );
}

export default ProductsList;
ProductsList.propTypes = {
  products: arrayOf(),
};
ProductsList.defaultProps = {
  products: arrayOf(),
};
