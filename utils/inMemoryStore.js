// utils/inMemoryStore.js
const quizzes = {};
const results = {};

let quizIdCounter = 1; // Counter for generating unique quiz IDs

// Create a new quiz
const createQuiz = (title, questions) => {
  const id = quizIdCounter.toString(); // Generate a new unique ID
  quizIdCounter += 1; // Increment the counter for next quiz

  quizzes[id] = {
    title: title,
    questions: questions.map((q, index) => ({
      id: `q${index + 1}`, // Generate a unique ID for each question
      text: q.text,
      options: q.options,
      correct_option: q.correct_option,
    })),
  };

  return id; // Return the new quiz ID
};

// Retrieve a quiz by its ID
const getQuizById = (id) => {
  return quizzes[id] || null;
};

// Submit an answer for a quiz
const submitAnswer = (quizId, userId, questionId, selectedOption) => {
  if (!results[quizId]) {
    results[quizId] = {};
  }
  if (!results[quizId][userId]) {
    results[quizId][userId] = { score: 0, answers: {}, submissionCount: 0 };
  }

  const userResults = results[quizId][userId];
  if (userResults.submissionCount >= 3) {
    return {
      status: 'error',
      message: 'Maximum submission limit of 3 reached.',
    };
  }

  const userAnswers = userResults.answers;
  if (userAnswers[questionId]) {
    return {
      status: 'error',
      message: 'Answer already submitted for this question.',
    };
  }

  const quiz = quizzes[quizId];
  const question = quiz.questions.find((q) => q.id === questionId);
  if (!question) {
    return { status: 'error', message: 'Question not found.' };
  }

  const isCorrect = question.correct_option === selectedOption;
  const answer = {
    question_id: questionId,
    selected_option: selectedOption,
    is_correct: isCorrect,
  };

  userAnswers[questionId] = answer; // Store answer
  if (isCorrect) {
    userResults.score += 1;
  }

  userResults.submissionCount += 1; // Increment submission count

  return { status: 'success', message: 'Answer submitted successfully.' };
};

const getResults = (quizId, userId) => {
  return results[quizId] ? results[quizId][userId] || null : null;
};

module.exports = {
  createQuiz,
  getQuizById,
  submitAnswer,
  getResults,
};
