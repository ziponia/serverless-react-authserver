import OAuth2Server, { AuthorizationCodeModel } from "oauth2-server";
import shortid from "shortid";

// mock data
const mock_client: OAuth2Server.Client = {
  grants: ["authorization_code"],
  id: "test-client",
  redirectUris: ["http://localhost:3000"],
  accessTokenLifetime: 60 * 60 * 3,
  refreshTokenLifetime: 60 * 60 * 24 * 30,
};

const mock_user: OAuth2Server.User = {};

const model: AuthorizationCodeModel = {
  getClient: async (clientId, clientSecret) => {
    console.log("getClient: ", clientId);
    return mock_client;
  },
  generateAuthorizationCode: async (client, user, scope) => {
    console.log("generateAuthorizationCode: ", client);
    return shortid.generate();
  },
  getAuthorizationCode: async (code) => {
    console.log("getAuthorizationCode: ", code);
    return {
      authorizationCode: code,
      client: mock_client,
      expiresAt: new Date(Date.now() + 86400),
      redirectUri: "",
      user: mock_user,
    };
  },
  saveToken: async (token, client, user) => {
    console.log("saveToken: ", token, client.id);
    return {
      ...token,
    };
  },
  revokeAuthorizationCode: async (code) => {
    console.log("revokeAuthorizationCode: ", code);
    return true;
  },
  verifyScope: async (token, scope) => {
    console.log("verifyScope: ", token, scope);
    return true;
  },
  getAccessToken: async (accessToken) => {
    console.log("getAccessToken: ", accessToken);
    return {
      accessToken: accessToken,
      user: mock_user,
      client: mock_client,
    };
  },

  saveAuthorizationCode: async (code, client, user) => {
    console.log("saveAuthorizationCode: ", code, client.id);
    return {
      authorizationCode: code.authorizationCode,
      client: mock_client,
      user: user,
      redirectUri: client.redirectUris as string,
      expiresAt: code.expiresAt,
      scope: code.scope,
    };
  },
};

export default model;
