// app.js
const express = require('express');
const quizRoutes = require('./routes/quizRoutes.js');
const resultRoutes = require('./routes/resultRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/quiz', quizRoutes);
app.use('/result', resultRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
