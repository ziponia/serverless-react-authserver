import authorize from "./authorize";
import token from "./token";
import login from "./login";

const tokenEndpoint = {
  authorize: authorize,
  token: token,
  login: login,
};

export default tokenEndpoint;
