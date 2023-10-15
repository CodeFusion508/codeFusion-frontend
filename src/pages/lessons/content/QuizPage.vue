<template>
  <nav-bar />

  <div class="container mt-3 rounded bg-dark-subtle p-3 shadow-sm">
    <div v-if="currentQuestionIndex < questions.length">
      <h4>{{ questions[currentQuestionIndex].question }}</h4>
      <hr>
      <div>
        <div v-for="(answer, index) in questions[currentQuestionIndex].answers" :key="index" class="form-check">
          <input
            :id="'flexRadioDefault' + index"
            v-model="selectedAnswer"
            class="form-check-input"
            type="radio"
            :name="'flexRadioDefault'"
            :value="answer"
          >
          <label :for="'flexRadioDefault' + index" class="form-check-label text-white">
            {{ answer.text }}
          </label>
        </div>
      </div>
      <button @click="checkAnswer">
        Submit
      </button>
    </div>
    <div v-else>
      <p v-if="quizCompleted">
        Quiz Completed!
      </p>
      <button v-else @click="startQuiz">
        Start Quiz
      </button>
    </div>
  </div>

  <nav-footer class="position-absolute" />
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question : "Question 1: What is HTML?",
          answers  : [
            {
              "text"      : "answer number one",
              "isCorrect" : true
            },
            {
              "text"      : "answer number two",
              "isCorrect" : true
            },
            {
              "text"      : "answer number three",
              "isCorrect" : true
            },
            {
              "text"      : "answer number four",
              "isCorrect" : true
            },
            {
              "text"      : "answer number five",
              "isCorrect" : true
            }
          ]
        },
        {
          question : "Question 2: Your next question here",
          answers  : [
            // Define answers for question 2
          ]
        }
        // Repeat this structure for all 10 questions
      ],
      currentQuestionIndex : 0,
      selectedAnswer       : null,
      quizCompleted        : false
    };
  },
  methods: {
    startQuiz() {
      this.currentQuestionIndex = 0;
      this.quizCompleted = false;
      // Load the first question and answers
    },
    loadNextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedAnswer = null;
      } else {
        this.quizCompleted = true;
      }
    },
    checkAnswer() {
      // Implement your answer checking logic here
      // Update the score or perform other actions as needed
      // Then move to the next question using loadNextQuestion()
      this.loadNextQuestion();
    }
  }
};
</script>