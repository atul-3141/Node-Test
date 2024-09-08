const { createQuiz, getQuizById } = require('../utils/inMemoryStore.js'); // Import inMemoryStore.js

// Function to create quiz with set of questions and there correct answer
const createQuizData = (req, res) => {
  const { title, questions } = req.body;

  // Validate request payload
  if (!title || !Array.isArray(questions) || questions.length === 0) {
    return res
      .status(400)
      .json({ status: 'error', message: 'Invalid request payload' });
  }

  // Create the quiz and get the new quiz ID
  const id = createQuiz(title, questions);
  res.status(201).json({
    status: 'success',
    message: 'Quiz created successfully',
    quiz_id: id,
  });
};

// Function to fetch quiz by Id
const getQuizData = (req, res) => {
  // fetch quiz
  const quiz = getQuizById(req.params.id);
  // check validation logic
  if (!quiz) {
    return res.status(404).json({ status: 'error', message: 'Quiz not found' });
  }
  res.status(200).json({ status: 'success', data: quiz });
};

module.exports = { createQuizData, getQuizData };
