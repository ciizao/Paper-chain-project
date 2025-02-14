# List Product Service

## 📌 Overview
This microservice provides a **GraphQL API** for managing products. 

## 🚀 Technologies Used
- **Node.js** with **Express.js**
- **Apollo Server** for GraphQL
- **Sequelize ORM**
- **PostgreSQL**
- **dotenv** for environment variables
- **CORS** for cross-origin requests

## 📦 Features
- **Retrieve all products**
- **Fetch catalog-specific product details**
- **Connects to PostgreSQL for data storage**
- **Uses Sequelize for ORM mapping**

## 🛠 Installation
```sh

git clone https://github.com/ciizao/Paper-chain-project.git
cd product-management-service

npm install

DB_HOST=<your-db-host>
DB_NAME=<your-db-name>
DB_USER=<your-db-user>
DB_PASSWORD=<your-db-password>
PORT=4000
```

## ▶️ Running the Service
```sh
npm start
```
The GraphQL server will be available at: `http://localhost:4000/products`

## 📝 GraphQL Queries
### Fetch All Products
```graphql
query {
  allProducts {
    id
    name
    price
    category
    brand
    stock
    image_url
  }
}
```
### Fetch Catalog Products
```graphql
query {
  catalogProducts {
    id
    name
    price
    category
    brand
    image_url
  }
}
```

