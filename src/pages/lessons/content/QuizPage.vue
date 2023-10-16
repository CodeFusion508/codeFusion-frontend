<template>
  <nav-bar />

  <div class="container rounded bg-dark-subtle p-3 shadow-dark mt-5">
    <div v-if="continueQuestions">
      <div v-for="(question, index) in questions" :key="index" class="form-check">
        <h4>{{ question.question }}</h4>
        <hr>
        <div>
          <div v-for="(ans, i) in question.answers" :key="i">
            <input
              :id="`${index}` + i"
              v-model="selectedAnswer"
              class="form-check-input"
              type="radio"
              :name="'flexRadioDefault'"
              :value="`${index}` + i"
            >
            <label :for="`${index}` + i" class="form-check-label text-white mb-1">
              {{ ans.text }}
            </label>
          </div>
        </div>
      </div>
      <button class="btn gradient-purple rounded-lg text-white mt-3" @click="checkAnswer">
        Enviar
      </button>
    </div>
    <div v-else>
      <p v-if="quizCompleted">
        Examen Completado!
      </p>
      <button v-else @click="startQuiz">
        Comienza el Examen!
      </button>
    </div>
  </div>

  <nav-footer />
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
      continueQuestions    : true,
      quizCompleted        : false,
      answers              : []
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
    },
    loadNextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedAnswer = null;
      } else {
        this.continueQuestions = false;
        this.quizCompleted = true;
      }
    },
    checkAnswer() {
      this.answers = this.questions[this.currentQuestionIndex];
      this.loadNextQuestion();
    }
  }
};
</script>