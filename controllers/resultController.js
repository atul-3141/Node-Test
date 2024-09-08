const { submitAnswer, getResults } = require('../utils/inMemoryStore.js'); // Import inMemoryStore.js

//Function to Submit an answer
/*const submitAns = (req, res) => {
  const { quiz_id, user_id, question_id, selected_option } = req.body;

  // Validation logic
  if (!quiz_id || !user_id || !question_id || selected_option === undefined) {
    return res
      .status(400)
      .json({ status: 'error', message: 'Missing required fields' });
  }

  // Submit Answer if validation pass
  const result = submitAnswer(quiz_id, user_id, question_id, selected_option);

  if (result.status === 'error') {
    return res.status(400).json(result);
  }

  res.status(200).json(result);
};
*/
// Controller function to submit an answer
const submitAns = (req, res) => {
  const { quiz_id, user_id, question_id, selected_option } = req.body;

  if (!quiz_id || !user_id || !question_id || selected_option === undefined) {
    return res
      .status(400)
      .json({ status: 'error', message: 'Missing required fields' });
  }

  const result = submitAnswer(quiz_id, user_id, question_id, selected_option);
  if (result.status === 'error') {
    return res.status(400).json(result);
  }

  res.status(200).json(result);
};

// Get user results
const getRes = (req, res) => {
  const { quiz_id, user_id } = req.params;
  // Fetch Result
  const results = getResults(quiz_id, user_id);

  // If result not found throw err msg
  if (!results) {
    return res
      .status(404)
      .json({ status: 'error', message: 'Results not found' });
  }

  // Send response back to the user
  res.status(200).json({
    status: 'success',
    data: {
      quiz_id,
      user_id,
      score: results.score,
      answers: results.answers,
    },
  });
};

module.exports = { submitAns, getRes };
