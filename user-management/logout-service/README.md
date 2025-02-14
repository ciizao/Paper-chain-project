# 🚀 Logout Service

A FastAPI microservice to **invalidate JWT tokens** upon user logout, ensuring session security.

## 📌 Features
- ✅ **JWT Token Invalidation**: Prevents reuse of old tokens.
- 🔒 **Database-backed Revocation**: Tracks revoked tokens.
- ⚡ **FastAPI-powered API**: Lightweight and efficient.
- 🌍 **CORS Support**: Configured for flexible cross-origin requests.

## 🛠️ Installation
```bash
# Clone the repository
git clone https://github.com/ciizao/Paper-chain-project.git
cd logout-service

# Install dependencies
pip install -r requirements.txt
```

## ⚙️ Configuration
Set up environment variables in a `.env` file:
```env
DATABASE_URL=postgresql+asyncpg://user:password@localhost/dbname
JWT_SECRET=secret_key
JWT_ALGORITHM=HS256
JWT_EXPIRATION_MINUTES=30
```

## 🚀 Running the Service
```bash
uvicorn main:app --host 0.0.0.0 --port 8002 --reload
```

## 📡 API Endpoints
### 🔹 Logout (Invalidate Token)
```http
POST /logout
```
#### 🔹 Request Headers
```json
{
  "Authorization": "Bearer <jwt-token>"
}
```
#### 🔹 Response
```json
{
  "message": "Logout successful"
}
```

