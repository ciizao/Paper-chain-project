# 🚀 User Registration Microservice

## 📌 Overview
This microservice handles user registration, ensuring that each email is unique and securely storing passwords using bcrypt hashing.

## 🛠️ Technologies Used
- **FastAPI** - Web framework for high-performance APIs.
- **SQLAlchemy (Async)** - Database ORM for PostgreSQL.
- **bcrypt** - Secure password hashing.
- **PostgreSQL** - Relational database.
- **Docker** - Containerized deployment.
- **CORS Middleware** - Enables cross-origin requests.

## 🚀 Running the Microservice
### 1️⃣ Install dependencies
```bash
pip install -r requirements.txt
```

### 2️⃣ Set up environment variables
Create a `.env` file in the project root:
```env
DATABASE_URL=database_url
SECRET_KEY=secret_key
```

### 3️⃣ Start the server
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

## 📌 API Endpoints
| Method | Endpoint     | Description |
|--------|-------------|-------------|
| POST   | `/register` | Register a new user |

### 📝 Example Request
```json
{
  "name": "Cris",
  "email": "cris@email.com",
  "password": "password"
}
```

## 🔐 Security Measures
- Passwords are hashed using **bcrypt** before storing.
- Unique email validation prevents duplicates.





