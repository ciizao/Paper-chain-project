# Get Order Server

## 🚀 Features
- Retrieve an order by ID.
- Fetch all orders associated with a user.
- Manage order status: `Pending`, `Processing`, `Completed`, `Cancelled`.
- Store order items with product details.

## 🛠️ Tech Stack
- **Backend**: Node.js (Express.js)
- **Database**: PostgreSQL (Sequelize ORM)
- **Environment Variables**: dotenv
- **Middleware**: CORS, Body-Parser


## 🔧 Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ciizao/Paper-chain-project.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your `.env` file:
   ```sh
   DB_HOST=db-host
   DB_PORT=db-port
   DB_USER=db-user
   DB_PASSWORD=db-password
   DB_NAME=db-name
   PORT=5002
   ```

## 🔌 API Endpoints
| Method | Endpoint                 | Description                   |
|--------|--------------------------|-------------------------------|
| GET    | `/api/order/:order_id`   | Get order by ID               |
| GET    | `/api/order/user/:user_id` | Get all orders for a user |



