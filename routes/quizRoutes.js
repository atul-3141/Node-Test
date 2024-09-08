// routes/quizRoutes.js
const express = require('express');
const {
  createQuizData,
  getQuizData,
} = require('../controllers/quizController.js');

const router = express.Router();

// Create a new quiz
router.post('/create', createQuizData);

// Get a quiz by ID
router.get('/:id', getQuizData);

module.exports = router;
