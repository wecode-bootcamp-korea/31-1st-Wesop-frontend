const loginServerRootAddress = 'http://10.58.6.208:8000';

export const LOGIN_SERVER_ADDRESS = {
  loginMainAddress: `${loginServerRootAddress}/users/check`,
  loginSignInAddress: `${loginServerRootAddress}/users/login`,
  loginSignUpAddress: `${loginServerRootAddress}/users/signup`,
};

const DetailServerRootAddress = 'http://10.58.5.254:8000';

export const DETAIL_SERVER_ADDRESS = {
  mainDescription: `${DetailServerRootAddress}/products/detail/1`,
  bottomDescription: `${DetailServerRootAddress}/products/recommend/1`,
};
