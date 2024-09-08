// routes/quizRoutes.js
const express = require('express');
const { submitAns, getRes } = require('../controllers/resultController');

const router = express.Router();

// Create a new quiz
router.post('/submit', submitAns);

// Get a quiz by ID
router.get('/get/:quiz_id/:user_id', getRes);

module.exports = router;
