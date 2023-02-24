import React, { useEffect, useRef, useState } from 'react';
import { func } from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { getProductCategories } from '../utils/utils';

function Filter({ onFilter, onFilterByPrice }) {
  const [productCategories, setProductCategories] = useState([]);
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChangeCategoryHandler = (e) => {
    if (e.target.checked) {
      setCategoryChecked([...categoryChecked, e.target.value]);
    } else {
      setCategoryChecked([...categoryChecked].filter((category) => category !== e.target.value));
    }
  };

  async function fetchProductCategories() {
    const { categories } = await getProductCategories();
    setProductCategories(categories);
  }

  async function fetchProductsByFilteredCategory() {
    const category = searchParams.get('category');
    if (!category) {
      return;
    }
    await onFilter(category);
  }

  function onFilteredProductByPrice() {
    onFilterByPrice(minPriceRef.current.value, maxPriceRef.current.value);
    setCategoryChecked([]);
    minPriceRef.current.value = '';
    maxPriceRef.current.value = '';
  }

  useEffect(() => {
    async function onFetch() {
      await fetchProductCategories();
      await fetchProductsByFilteredCategory();
    }
    if (categoryChecked.length) {
      setSearchParams({
        category: `${[...categoryChecked]}`,
      });
    }
    onFetch();
    return () => {
      searchParams.delete('category');
      setSearchParams(searchParams);
    };
  }, [categoryChecked, searchParams.get('category')]);

  return (
    <article className="flex flex-col w-2/12 shadow-lg rounded-md p-10 min-h-96 max-h-96 box-border">
      {productCategories.map((category) => (
        <label key={category} htmlFor={category}>
          <input type="checkbox" className="mr-4" value={category} checked={categoryChecked.includes(category)} onChange={onChangeCategoryHandler} />
          {category}
        </label>
      ))}
      <div className="filter-by-price border-t-4 mt-4">
        <div className=" p-4 flex justify-between box-border w-full">
          <div className="w-5/12">
            <input placeholder="" className="w-[100%] px-2 py-2 border border-slate-400 rounded-md text-sm" ref={minPriceRef} />
          </div>
          <div className="flex justify-center items-center mx-2">
            <div className="border w-4 border-slate-400" />
          </div>
          <div className="w-5/12">
            <input placeholder="" className="w-[100%] px-2 py-2 border border-slate-400 rounded-md" ref={maxPriceRef} />
          </div>
        </div>
        <div className="cursor-pointer border px-4 py-1 text-center bg-slate-200">
          <button type="button" onClick={onFilteredProductByPrice}>
            <span>Terapkan</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default Filter;

Filter.propTypes = {
  onFilter: func,
  onFilterByPrice: func,
};

Filter.defaultProps = {
  onFilter: func,
  onFilterByPrice: func,
};
