<template>
  <nav-bar />

  <div class="container rounded bg-dark-subtle p-3 shadow-dark mt-5 mb-5">
    <h1 class="text-center">
      Examen
    </h1>
    <hr>
    <div v-if="continueQuestions">
      <div v-for="(question, qIndex) in questions" :key="qIndex" class="form-check">
        <h4>{{ question.question }}</h4>
        <hr>
        <div>
          <div v-for="(ans, aIndex) in question.answers" :key="aIndex">
            <input
              :id="`${qIndex}` + aIndex"
              v-model="selectedAnswers[qIndex]"
              class="form-check-input"
              type="radio"
              :name="'flexRadioDefault' + qIndex"
              :value="`${qIndex}` + aIndex"
            >
            <label :for="`${qIndex}` + aIndex" class="form-check-label text-white mb-1">
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
      selectedAnswers      : [],
      continueQuestions    : true,
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
    },
    checkAnswer() {
      const answers = [];

      for (let i = 0; i < this.selectedAnswers.length; i++) {
        const numbers = this.selectedAnswers[i].split("");
        const question = {...this.questions[numbers[0]]};
        question.answers =  {...this.questions[numbers[0]].answers[numbers[1]]};

        answers.push(question);
      }

      this.continueQuestions = false;
      this.quizCompleted = true;
    }
  }
};
</script>