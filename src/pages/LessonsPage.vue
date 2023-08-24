<template>
  <nav-bar />

  <div v-for="(_, index) in sprints" :key="index">
    <h3 class="text-center mt-3 fst-italic">
      Sección {{ index }}
    </h3>

    <div class="row g-0 text-center mx-3">
      <div
        v-for="(sprint, i) in sprints[index]"
        :key="i"
        :class="['col-12 px-2 my-3', sprints.length <= 3 ? 'col-sm' : 'col-sm-3']"
      >
        <div class="card card grow-on-hover bg-dark-subtle border-0 shadow-dark rounded-lg">
          <div class="card-body">
            <h5 class="card-title text-white" @click="changeRouteLessons(sprint.uuid)">
              {{ sprint.title }}
            </h5>
            <hr>
            <p class="card-text text-white">
              {{ sprint.desc }}
            </p>
            <button class="btn gradient-purple text-white" @click="changeRouteLessons(sprint.uuid)">
              Aprende
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-5" />

  <nav-footer />
</template>

<script>
import { mapActions, mapState } from "pinia";

import { useDaysStore } from "@/store/lessons/daysStore.js";
import { useSprintsStore } from "@/store/lessons/sprintsStore.js";

export default {
  computed: {
    ...mapState(useSprintsStore, ["sprints"])
  },
  async created() {
    await this.getSprints();
  },
  methods: {
    ...mapActions(useDaysStore, ["setDaysBySprintUuid"]),
    ...mapActions(useSprintsStore, ["getSprints"]),
    changeRouteLessons(uuid) {
      this.setDaysBySprintUuid(uuid);

      this.$router.push({ name: "lessons-day" });
    }
  }
};
</script>

<style scoped>
.card.grow-on-hover:hover {
  transform: scale(1.1);
  transition: transform 0.5s;
  z-index: 2;
}
</style>