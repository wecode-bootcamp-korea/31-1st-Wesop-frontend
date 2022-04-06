const loginServerRootAddress = 'http://10.58.2.34:8000';

export const LOGIN_SERVER_ADDRESS = {
  loginMainAddress: `${loginServerRootAddress}/users/check`,
  loginSignInAddress: `${loginServerRootAddress}/users/login`,
  loginSignUpAddress: `${loginServerRootAddress}/users/signup`,
};

const cartServerRootAddress = 'http://10.58.2.34:8000';

export const CART_SERVER_ADDRESS = {
  cartMainAddress: `${cartServerRootAddress}/carts/cart`,
};
