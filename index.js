require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const server = new ApolloServer({
  cors: {
		origin: 'https://with-coders-test.vercel.app/',			// <- allow request from all domains [Risky but fast]
  },
  typeDefs,
  resolvers,
  introspection: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
