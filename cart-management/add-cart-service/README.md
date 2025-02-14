# Checkout Service

## 📌 Features
- Secure authentication using JWT.
- Retrieves the user's cart from the **Cart Service**.
- Creates an order in the **Order Service**.
- Clears the cart upon successful checkout.
- RESTful API following best practices.

## 🛠️ Technologies
- **Node.js** (Express.js)
- **JWT Authentication**
- **Axios** (for API calls)
- **Dotenv** (for environment variables)
- **CORS**

## 🔧 Installation & Setup
```sh
# Clone repository
git clone https://github.com/ciizao/Paper-chain-project.git
cd checkout-service

# Install dependencies
npm install

# Create .env file and configure required environment variables
PORT=8087
JWT_SECRET=secret_key
CART_SERVICE_URL=http://cart-service-url
ORDER_SERVICE_URL=http://order-service-url

# Start the service
npm start
```
## 📌 API Endpoints
### 🔹 Checkout
```http
POST /checkout/
```
## 🔒 Authentication
All routes require a valid **JWT token** passed in the `Authorization` header:
```
Authorization: Bearer <token>
```

## 🎯 How It Works
1. **User initiates checkout.**
2. **AuthMiddleware** verifies the JWT.
3. **CartService** retrieves the user's cart.
4. **OrderService** creates an order.
5. **CartService** clears the cart.
6. **Response is returned with order confirmation.**


