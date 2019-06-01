module.exports = `
  type Query {
    getUsers: [User!]!
    user(email: String!): User!
    getChild(name: String!): Child!
  }
`;
