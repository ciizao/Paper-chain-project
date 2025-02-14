# Delete Product Service

## 🚀 Features
- Delete a product by ID.
- Handles errors and missing products gracefully.
- Uses **Sequelize** ORM for database interaction.
- Configured with **CORS** for secure API communication.

## 🛠️ Technologies Used
- **Node.js**
- **Express.js**
- **Sequelize ORM**
- **PostgreSQL**
- **dotenv** for environment variables

## 🔧 Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ciizao/Paper-chain-project.git
   cd delete-product-service
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the environment variables in a `.env` file:
   ```env
   DB_NAME=database_name
   DB_USER=database_user
   DB_PASSWORD=database_password
   DB_HOST=database_host
   PORT=3003
   ```
4. Start the server:
   ```bash
   npm start
   ```

## 📡 API Endpoint
### DELETE `/api/products/:id`
Deletes a product by its **ID**.

#### ✅ Request Example:
```http
DELETE /api/products/12345
```

#### 🔹 Response (Success):
```json
{
  "message": "Product deleted successfully"
}
```

#### 🔸 Response (Product Not Found):
```json
{
  "message": "Product not found"
}
```



