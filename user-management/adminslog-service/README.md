# 🚀 Admin Login Microservice

## 📌 Overview
This microservice provides authentication for administrators using FastAPI and PostgreSQL. It allows admins to log in with their email and password stored in a database.

## 🔧 Technologies Used
- **FastAPI** (for building the API)
- **PostgreSQL** (database)
- **SQLAlchemy** (ORM for database interactions)
- **Docker & Docker Compose** (containerization)
- **Pydantic** (data validation)


## 🛠️ Setup & Installation
### Clone the Repository
```bash
git clone https://github.com/ciizao/Paper-chain-project.git
cd admin-login-service
```

### 3Run with Docker Compose
```bash
docker-compose up --build
```

## 🔑 Authentication Endpoint
### **POST `/admlogin`**
**Request Body:**
```json
{
    "email": "admin@example.com",
    "password": "adminpassword"
}
```
**Response (Success):**
```json
{
    "access_token": "token_admin@example.com",
    "token_type": "bearer"
}
```
**Response (Failure):**
```json
{
    "detail": "Invalid credentials"
}
```

