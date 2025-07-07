const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnect = require('./src/config/dbConnect.js');
const authRoutes = require('./src/router/authRoutes.js')
const userRoutes = require('./src/router/userRoutes.js')
const managerRoutes  =  require('./src/router/mangerRoutes.js')
dotenv.config();

const app = express();
app.use(cors());
// this helps to read the json data from the request body 
app.use(express.json());

dbConnect();

app.get('/', (req, res) => {
 console.log('✅ GET / called');
  res.send('🎉 Backend is working and MongoDB is connected!');
});
// routes
app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/complaints", managerRoutes);



const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

