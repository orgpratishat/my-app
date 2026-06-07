const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const User = require('./models/User.js'); 
const personalSignupRoute = require('./routes/personalSignup'); 
const organizationSignupRoute = require('./routes/organizationSignUp'); 
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/auth');
const { upload } = require("./config/cloudinary");

require('dotenv').config();
const SECRET_KEY = "your_secret_key";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
      origin: process.env.CLIENT_BASE_URL,
      methods: ['GET', 'POST', 'DELETE', 'PUT','PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Expires', 'Pragma'],
      credentials: true,
    })
  );
  
  app.use(cookieParser());
  app.use(express.json());

  app.use('/api', personalSignupRoute);
  app.use('/api', organizationSignupRoute);
  app.use('/api/users', userRoutes);
  app.use('/api/auth', authRoutes);
  app.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file || !req.file.path) {
      return res.status(400).json({ error: "File upload failed" });
    }
    res.json({ url: req.file.path });
  });
  app.listen(PORT, () => console.log(`Server is now listening on ${PORT}`));
