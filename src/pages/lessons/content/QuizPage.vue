<template>
  <nav-bar />

  <div class="container rounded bg-dark-subtle p-3 shadow-dark mt-5">
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
import { mapState } from "pinia";

import { useContentStore } from "@/store/lessons/contentStore.js";

export default {
  data() {
    return {
      questions            : [],
      currentQuestionIndex : 0,
      selectedAnswer       : null,
      quizCompleted        : false
    };
  },
  computed: {
    ...mapState(useContentStore, ["result", "contIndex"])
  },
  async created() {
    const qna = await JSON.parse(this.result[this.contIndex].node.questions);

    for (const key in qna) {
      let obj = {};
      obj.question = qna[key].question;
      obj.answers = [];

      for (const key2 in qna[key].answers) {
        obj.answers.push(qna[key].answers[key2]);
      }

      this.questions.push(obj);
    }
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