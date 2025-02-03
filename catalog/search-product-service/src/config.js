require("dotenv").config();

module.exports = {
  listProductServiceGraphQL: process.env.LIST_PRODUCT_SERVICE_GRAPHQL,
  port: process.env.PORT || 8005
};
