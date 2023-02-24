import React, { useEffect, useState } from 'react';
import SearchInput from '../components/SearchInput';
import Filter from '../components/Filter';
import ProductsList from '../components/ProductsList';
import {
  getAllProducts, getProductsByKeyword, getFilteredProductByCategory, getProductByPrice,
} from '../utils/utils';

function HomeSearch() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { products } = await getAllProducts();
      setAllProducts(products);
    })();
  }, []);

  const filterByCategory = async (category) => {
    const { products } = await getFilteredProductByCategory(category);
    setAllProducts(products);
  };

  const getProductsByKey = async (keyword) => {
    try {
      const { products } = await getProductsByKeyword(keyword);
      if (products) {
        setAllProducts(products);
      }
    } catch ({ response }) {
      const { data } = response.data;
      setAllProducts(data);
    }
  };
  const onFilterByPrice = async (minPrice, maxPrice) => {
    const { products } = await getProductByPrice(minPrice, maxPrice);
    setAllProducts(products);
  };

  return (
    <article className="HomeSearch bg-slate-50">
      <header>
        <SearchInput onSearch={getProductsByKey} />
      </header>
      <main className="flex justify-around">
        <Filter onFilter={filterByCategory} onFilterByPrice={onFilterByPrice} />
        <ProductsList products={allProducts} />
      </main>
    </article>
  );
}

export default HomeSearch;
