export default `
  type User {
    _id: String!
    email: String
    name: String
    phoneNumber: String!
    child: [Child]
  }

  type Child {
    _id: String!
    userId: String!
    name: String!
    age: String!
  }

  type SuccessMessage {
    message: String
  }
`;
