# 🛡️ Authentication Service

## 📌 Overview
This is a FastAPI-based authentication microservice that handles user login and authentication using JWT. It connects to a PostgreSQL database and supports asynchronous operations with SQLAlchemy.

## ⚙️ Technologies Used
- **FastAPI** 🚀 - High-performance web framework
- **SQLAlchemy (Async)** 🛢️ - Database ORM
- **PostgreSQL** 🐘 - Relational Database
- **JWT (JSON Web Tokens)** 🔑 - Secure authentication

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/ciizao/Paper-chain-project.git
cd auth-service
```

### 2️⃣ Create a Virtual Environment
```sh
python -m venv venv
venv\Scripts\activate    
```

### 3️⃣ Install Dependencies
```sh
pip install -r requirements.txt
```

### 4️⃣ Set Up Environment Variables
Create a `.env` file and configure:
```env
DATABASE_URL=postgresql+asyncpg://user:password@localhost/dbname
JWT_SECRET=secret_key
JWT_ALGORITHM=HS256
JWT_EXPIRATION_MINUTES=30
```

### 5️⃣ Run the Application
```sh
uvicorn app.main:app --host 0.0.0.0 --port 8006 --reload
```

## 🛠️ API Endpoints
### 🔑 Login
**POST** `/login`
#### Request Body:
```json
{
  "email": "cris@email.com",
  "password": "password"
}
```
#### Response:
```json
{
  "access_token": "jwt_token",
  "token_type": "bearer"
}
```
