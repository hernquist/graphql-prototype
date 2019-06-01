const { makeExecutableSchema } = require("graphql-tools");

// import enums from './typedefs/enums';
// import scalars from './typedefs/scalars';
const types = require("./typedefs/types");
const inputs = require("./typedefs/inputs");
const queries = require("./typedefs/queries");
const mutations = require("./typedefs/mutations");
const resolvers = require("./resolvers");

const typeDefs = `
  ${inputs}
  ${types}
  ${queries}
  ${mutations}
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
