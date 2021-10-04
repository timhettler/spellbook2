import { ApolloServer } from "apollo-server";

import { resolvers, typeDefs } from "./schema";
import { context } from "./context";

const server = new ApolloServer({ resolvers, typeDefs, context: context });

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
