export default `
  type Mutation {
    createUser(user: InputUser): User
    createChild(child: InputChild): String
  }
`;
