# Stock Query Service

## 🚀 Features

- Retrieves stock information for products.
- Uses **Gin** for fast and efficient HTTP handling.
- Connects to a PostgreSQL database via **sqlx**.
- Loads environment variables from a `.env` file.

## 🛠️ Tech Stack

- **Language:** Go
- **Framework:** Gin
- **Database:** PostgreSQL
- **ORM:** sqlx
- **Environment Management:** godotenv

## 🔧 Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/ciizao/Paper-chain-project.git
   cd stock-query-service
   ```
2. Set up environment variables:
   ```sh
   export DB_HOST=db-host
   export DB_PORT=5432
   export DB_USER=db-user
   export DB_PASSWORD=db-password
   export DB_NAME=db-name
   ```
3. Run the service:
   ```sh
   go run main.go
   ```

## 📌 API Endpoint

- **GET ****`/stock/:product_id`**
  - 📥 Request: `GET /stock/12345`
  - 📤 Response:
    ```json
    {
      "id": "12345",
      "name": "Notebook",
      "stock": 100
    }
    ```

##
