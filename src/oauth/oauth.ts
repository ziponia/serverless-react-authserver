import OAuth2Server, { Request } from "oauth2-server";
import model from "./model";

export const oauth2 = new OAuth2Server({
  model: model,
  allowEmptyState: true,
  authenticateHandler: {
    handler: async (request: Request) => {
      return {
        mockUser: 1,
      };
    },
  },
});

export default oauth2;
