import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { func } from 'prop-types';

function SearchInput({ onSearch }) {
  const searchRef = useRef();
  function searchProducts(e) {
    e.preventDefault();
    onSearch(searchRef.current.value);
    searchRef.current.value = '';
  }
  return (
    <article className="search p-7 w-3/4 mx-auto">
      <form className="search border w-full relative rounded-lg border-slate-400" onSubmit={searchProducts}>
        <input className="bg-slate-100 w-full px-7 py-3 rounded-xl border border-slate-100" ref={searchRef} placeholder="Laptop" />
        <button className="text-2xl text-slate-500" type="submit">
          <FaSearch className="absolute top-3 right-5" />
        </button>
      </form>
    </article>
  );
}

export default SearchInput;
SearchInput.propTypes = {
  onSearch: func,
};
SearchInput.defaultProps = {
  onSearch: func,
};
