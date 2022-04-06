const loginServerRootAddress = 'http://10.58.6.208:8000';

export const LOGIN_SERVER_ADDRESS = {
  loginMainAddress: `${loginServerRootAddress}/users/check`,
  loginSignInAddress: `${loginServerRootAddress}/users/login`,
  loginSignUpAddress: `${loginServerRootAddress}/users/signup`,
};

// TODO: 각자 테스트한 후, 최종적으로 아래와 같이 변경;
// const BASE_URL = 'http://10.57.2.129:8000';
// const API = {
//   loginMainAddress: `${BASE_URL}/users/check`,
//   loginSignInAddress: `${BASE_URL}/users/login`,
//   loginSignUpAddress: `${BASE_URL}/users/signup`,
//   category: `${BASE_URL}/products/categories`,
//   allProducts: `${BASE_URL}/products`,
// };

// export default API;
const DetailServerRootAddress = 'http://10.58.5.254:8000';

export const DETAIL_SERVER_ADDRESS = {
  mainDescription: `${DetailServerRootAddress}/products/detail/1`,
  bottomDescription: `${DetailServerRootAddress}/products/recommend/1`,
};
