import authorize from "./authorize";
import token from "./token";

const tokenEndpoint = {
  authorize: authorize,
  token: token,
};

export default tokenEndpoint;
