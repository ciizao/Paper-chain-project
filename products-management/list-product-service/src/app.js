require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const sequelize = require('./config/database');
const typeDefs = require('./services/schema');
const resolvers = require('./services/resolvers');

const app = express();


app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app, path: "/products" });

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

