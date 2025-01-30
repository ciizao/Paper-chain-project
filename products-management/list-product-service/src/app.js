const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const sequelize = require('./database');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();

// Configurar Apollo Server para GraphQL
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  // Conectar con la base de datos
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    await sequelize.sync();  // Sincronizar modelos con la base de datos
  } catch (error) {
    console.error('Database connection error:', error);
  }

  // Iniciar el servidor
  app.listen(4000, () => {
    console.log('GraphQL Server running at http://localhost:4000/graphql');
  });
};

// Ejecutar la configuración del servidor
startServer();
