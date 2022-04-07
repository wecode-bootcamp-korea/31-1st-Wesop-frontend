const loginServerRootAddress = 'http://10.58.4.238:8000';

export const LOGIN_SERVER_ADDRESS = {
  loginMainAddress: `${loginServerRootAddress}/users/check`,
  loginSignInAddress: `${loginServerRootAddress}/users/login`,
  loginSignUpAddress: `${loginServerRootAddress}/users/signup`,
};

const cartServerRootAddress = 'http://10.58.4.238:8000';

export const CART_SERVER_ADDRESS = {
  cartMainAddress: `${cartServerRootAddress}/carts`,
};

const DetailServerRootAddress = 'http://10.58.5.254:8000';

export const DETAIL_SERVER_ADDRESS = {
  mainDescription: `${DetailServerRootAddress}/products/`,
  bottomDescription: `${DetailServerRootAddress}/products/recommend/`,
};
