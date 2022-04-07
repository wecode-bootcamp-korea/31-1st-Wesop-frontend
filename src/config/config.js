const BASE_URL = 'http://10.58.4.196:8000';
const API = {
  loginMainAddress: `${BASE_URL}/users/check`,
  loginSignInAddress: `${BASE_URL}/users/login`,
  loginSignUpAddress: `${BASE_URL}/users/signup`,
  cartMainAddress: `${BASE_URL}/carts`,
  category: `${BASE_URL}/products/categories`,
  allProducts: `${BASE_URL}/products`,
  mainDescription: `${BASE_URL}/products/`,
  bottomDescription: `${BASE_URL}/products/recommend/`,
};

export default API;
