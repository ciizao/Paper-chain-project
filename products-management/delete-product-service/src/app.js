const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const productRoutes = require('./productRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', productRoutes);

const PORT = process.env.PORT || 3003;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    await sequelize.sync();
    
    app.listen(3003, () => {
      console.log(`Delete Product Service running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
