require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const sequelize = require('./database');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    await sequelize.sync();
  } catch (error) {
    console.error('Database connection error:', error);
  }

  app.listen(PORT, () => {
    console.log(`GraphQL Server running on port ${PORT}`);
  });
};

startServer();

