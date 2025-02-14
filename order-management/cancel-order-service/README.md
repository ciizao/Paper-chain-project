# Cancel Order Service

## 📌 Overview
The **Cancel Order Service** is a microservice responsible for handling order cancellations and restoring stock in an e-commerce system.

## 🚀 Features
- Cancels an order and updates its status.
- Restores stock for the canceled order items.
- Validates order status before cancellation.
- Provides a REST API endpoint for order cancellation.

## 🏗️ Technologies Used
- **Node.js** with **Express.js** (Web Framework)
- **Sequelize ORM** (Database Management)
- **PostgreSQL** (Relational Database)
- **Axios** (HTTP Requests)
- **Docker** (Containerization)

## 🔌 API Endpoint
| Method | Endpoint | Description |
|--------|---------|-------------|
| `PUT` | `/api/order/cancel/:order_id` | Cancels an order and restores stock |

## ⚙️ Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ciizao/Paper-chain-project.git
   cd cancel-order-service
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables (`.env` file):
   ```sh
   DB_HOST=db-host
   DB_PORT=db-port
   DB_USER=db-user
   DB_PASSWORD=db-password
   DB_NAME=db-name
   STOCK_UPDATE_URL=tock-service-url
   ```
4. Start the service:
   ```sh
   npm start
   ```

