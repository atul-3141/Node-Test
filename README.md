# Features

1. Create and retrieve quizzes
2. Submit answers and get immediate feedback
3. Retrieve user results with scores and answer summaries
4. Connected to a MongoDB database
5. Basic error handling and input validation

# Installation Prerequisites

1. Node.js (v14 or later)
2. npm (Node package manager)

# Steps

1. git clone https://github.com/atul-3141/Node-Test.git
2. cd your-repo
3. npm install
4. PORT=3000
5. MONGO_URI=mongodb://localhost:27017/quizapp

# Run the application

1. npm start
2. The application will be available at http://localhost:3000.

# .env

Create .env and Set Port number
PORT=3000

# API Endpoints

1. Create Quiz (POST : /quiz)

# Request Body

{
"id": "1",  
"title": "KBC Quiz",
"questions": [
{
"text": "Which planet is closest to the sun?",
"options": ["Mercury", "Saturn", "Earth", "Mars"],
"correct_option": 0
}
// Add more questions as needed
]
}

2. Get Quiz (GET : /quiz/:quiz_id)

# Request Body (NA)

3. Submit Answer (POST - /result/submit)

# Request Body

{
"quiz_id": "1", // ID of the quiz
"question_id": "q1", // ID of the question being answered
"user_id": "1", // hard coded user id
"selected_option": 0 // Index of the selected option (0-based)
}

3. Get Result (POST - /result/get/:quiz_id/:user_id)

# Request Body (NA)
