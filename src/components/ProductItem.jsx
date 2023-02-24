import React from 'react';
import { string, number } from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ProductItem({ title, thumbnail, price }) {
  return (
    <>
      <div>
        <LazyLoadImage src={thumbnail} placeholderSrc={thumbnail} effect="blur" className="w-full h-24" width="100%" />
      </div>
      <h1 className="my-4 mx-2 text-sm">{title}</h1>
      <h1 className="absolute bottom-0 mb-4 ml-4">
        <sup>$</sup>
        {price}
      </h1>
    </>
  );
}

export default ProductItem;
ProductItem.propTypes = {
  title: string.isRequired,
  thumbnail: string.isRequired,
  price: number.isRequired,
};
