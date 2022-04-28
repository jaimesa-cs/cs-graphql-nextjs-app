import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";
import { getSdk } from "./generated/cs/graphql";

const gqlCsClient = new GraphQLClient("http://localhost:3000/api/schema");
export const { AllStaticPages, StaticPageByUrl } = getSdk(gqlCsClient);

export const csQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
