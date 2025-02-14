# Stock Reservation Service

Stock Reservation Service is a microservice responsible for managing stock reservations for products.

## 🚀 Features
- Reserve stock for products.
- Validate stock availability before reservation.
- PostgreSQL integration for stock management.
- REST API built with **Gin** framework.

## 🛠 Technologies Used
- **Golang** (Gin Framework)
- **PostgreSQL** (Database)
- **Docker** (Optional for containerization)
- **dotenv** (For environment variables management)



## ⚙️ Setup & Run
1. Clone the repository:
   ```bash
   git clone https://github.com/ciizao/Paper-chain-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd stock-reservation-service
   ```
3. Set up environment variables:
   Create a `.env` file and add database credentials:
   ```env
   DB_HOST=your_host
   DB_PORT=your_port
   DB_USER=your_user
   DB_PASSWORD=your_password
   DB_NAME=your_database
   ```
4. Run the service:
   ```bash
   go run main.go
   ```

## 🔥 API Endpoint
- **Reserve Stock**
  - **POST** `/reserve-stock`
  - **Request Body:**
    ```json
    {
      "product_id": "123",
      "quantity": 2
    }
    ```


