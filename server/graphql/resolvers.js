// import { GraphQLScalarType } from "graphql";
// import { Kind } from "graphql/language";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
import _ from "lodash";

const prepare = obj => {
  if (obj) {
    obj._id = obj._id.toString();
  }
  return obj;
};

export default {
  // Date: new GraphQLScalarType({
  //   name: "Date",
  //   description: "Date custom scalar type",
  //   parseValue(value) {
  //     return new Date(value); // value from the client
  //   },
  //   serialize(value) {
  //     return value.getTime(); // value sent to the client
  //   },
  //   parseLiteral(ast) {
  //     if (ast.kind === Kind.INT) {
  //       return parseInt(ast.value, 10); // ast value is always in string format
  //     }
  //     return null;
  //   }
  // }),
  Query: {
    getUsers: async (parent, args, context) => {
      const users = await context.User.find();
      return users.map(user => prepare(user));
    },
    user: async (parent, args, context) => {
      const user = await context.User.find({ email: args.email });
      return prepare(user[0]);
    },
    getChild: async (parent, args, context) => {
      const child = await context.Child.find({ name: args.name });
      return prepare(child[0]);
    }
  },
  User: {
    child: async ({ _id }, ___, { Child }) => await Child.find({ userId: _id })
  },
  Mutation: {
    createUser: async (parent, args, context) => {
      const user = await context.User(args.user).save();
      return prepare(user);
    },
    createChild: async (parent, args, context) => {
      const child = await context.Child(args.child).save(); //db mongoose call
      return child
        ? `Successfully created child with ${prepare(child)._id}`
        : `Failure, child not created `;
    }
  }
};
