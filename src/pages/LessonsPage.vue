<template>
  <nav-bar />

  <div>
    <h3 class="text-center mt-3 fw-light fst-italic text-white">
      Sección 1
    </h3>

    <div class="row g-0 text-center">
      <div
        v-for="(obj, index) in sprints"
        :key="index"
        :class="['col-12 px-2 my-3', sprints.length <= 3 ? 'col-sm' : 'col-sm-3']"
      >
        <div class="card bg-dark-subtle border-0 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-white">
              {{ obj.title }}
            </h5>
            <hr>
            <p class="card-text text-white truncate-text-line">
              {{ obj.desc }}
            </p>
            <button class="btn gradient-purple text-white" @click="changeRouteLessons(obj.uuid)">
              Aprende
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <nav-footer />
</template>

<script>
import { mapActions, mapState } from "pinia";

import { useDaysStore } from "@/store/daysStore.js";
import { useSprintsStore } from "@/store/sprintsStore.js";

export default {
  computed: {
    ...mapState(useSprintsStore, ["sprints"])
  },
  async mounted() {
    await this.getSprints();
  },
  methods: {
    ...mapActions(useDaysStore, ["getDaysBySprintUuid"]),
    ...mapActions(useSprintsStore, ["getSprints"]),
    changeRouteLessons(uuid) {
      this.getDaysBySprintUuid(uuid);
      this.$router.push({ name: "lessons-day" });
    }
  }
};
</script>

<style scoped>
.truncate-text-line {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>