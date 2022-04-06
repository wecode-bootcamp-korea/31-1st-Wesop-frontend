const loginServerRootAddress = 'http://10.58.6.208:8000';

export const LOGIN_SERVER_ADDRESS = {
  loginMainAddress: `${loginServerRootAddress}/users/check`,
  loginSignInAddress: `${loginServerRootAddress}/users/login`,
  loginSignUpAddress: `${loginServerRootAddress}/users/signup`,
};

TODO: 각자 테스트한 후, 최종적으로 아래와 같이 변경
const BASE_URL = 'http://10.57.2.129:8000';
const API = {
  loginMainAddress: `${BASE_URL}/users/check`,
  loginSignInAddress: `${BASE_URL}/users/login`,
  loginSignUpAddress: `${BASE_URL}/users/signup`,
  categoryInfo: `${BASE_URL}/products/categories`,
  products: `${BASE_URL}/products`,
};

export default API;
