const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    id: String
    name: String
    price: Float
    category: String
    stock: Int
  }

  type Query {
    products: [Product]  # Consulta para listar todos los productos
  }
`;

module.exports = typeDefs;
