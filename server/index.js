const { GraphQLServer } = require("graphql-yoga");

const server = new GraphQLServer();
server.start.apply(({ port }) => {
  console.log(`Server started on http://localhost:${port}/`);
});
