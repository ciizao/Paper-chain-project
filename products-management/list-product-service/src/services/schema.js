const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    id: String
    name: String
    price: Float
    category: String
    brand:String
    stock: Int
    image_url: String 
  }

  type Query {
    allProducts: [Product]  
    catalogProducts: [Product] 
  }
`;

module.exports = typeDefs;
