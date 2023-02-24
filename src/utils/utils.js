import axios from 'axios';

export const getProductCategories = async () => {
  const respon = await axios.get(`${process.env.BASE_URL}/products/categories`);
  return respon.data;
};

export const getAllProducts = async () => {
  const respon = await axios.get(`${process.env.BASE_URL}/products`);
  return respon.data;
};

export const getProductsByKeyword = async (keyword) => {
  const respon = await axios.get(`${process.env.BASE_URL}/products/keyword?title=${keyword}`);
  return respon.data;
};

export const getFilteredProductByCategory = async (filteredCategory) => {
  const response = await axios.get(`${process.env.BASE_URL}/products/keyword?category=${filteredCategory}`);
  return response.data;
};

export const getProductByPrice = async (minPrice, maxPrice) => {
  const response = await axios.get(`${process.env.BASE_URL}/products/keyword?minPrice=${minPrice}&maxPrice=${maxPrice}`);
  return response.data;
};

export const getProductFiltered = async ({
  category, minPrice, maxPrice, title,
}) => {
  const response = await axios.get(`${process.env.BASE_URL}/products/keyword?title=${title}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
  return response.data;
};
