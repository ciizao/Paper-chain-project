# Create Product Service

## 🛠️ Technologies Used
- **Node.js** - Backend framework
- **Express.js** - Web framework for API handling
- **Sequelize** - ORM for PostgreSQL
- **PostgreSQL** - Relational database
- **dotenv** - Environment variable management

## 📌 Features
- Create new products with essential attributes.
- RESTful API endpoint for product creation.
- PostgreSQL database integration using Sequelize.
- Environment variable support for secure configuration.


## 🔌 API Endpoint
### Create a Product
**POST /api/products/create-product**

#### Request Body
```json
{
  "id": "string",
  "name": "string",
  "detail": "string",
  "price": "float",
  "category": "string",
  "brand": "string",
  "stock": "integer",
  "image_url": "string (optional)"
}
```

#### Response
```json
{
  "message": "Product created successfully",
  "product": { ...product details... }
}
```

## 🚀 Running the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/ciizao/Paper-chain-project.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure database credentials:
   ```env
   DB_NAME=name_db
   DB_USER=name_user
   DB_PASSWORD=password
   DB_HOST=your_host
   PORT=3001
   ```
4. Start the server:



