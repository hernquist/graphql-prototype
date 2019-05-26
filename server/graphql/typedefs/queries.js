export default `
  type Query {
    getUsers: [User!]!
    user(email: String!): User!
    getChild(name: String!): Child!
  }
`;
