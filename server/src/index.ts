import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import mongoose from "mongoose";
import Project from "./models/Project";

const url = "mongodb://localhost:27017/web";
mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once("open", () => console.log("Connected to mongo"));

const typeDefs = gql`
  type Project {
    id: ID!
    name: String
    description: String
  }
  type Query {
    getProjects: [Project]
  }
`;

const resolvers = {
  Query: {
    getProjects: async () => await Project.find({}).exec()
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
