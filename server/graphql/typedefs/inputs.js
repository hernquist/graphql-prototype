export default `
  input InputUser {
    email: String!
    name: String!
  }

  input InputChild {
    name: String,
    userId: String,
    age: String
  }

  input SignupUser {
    phoneNumber: String!
    email: String
  }
`;
