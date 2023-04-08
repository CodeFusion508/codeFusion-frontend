<template>
  <nav-bar />

  <div>
    <h3 class="text-center mt-3 fw-light fst-italic text-white">
      Sección 1
    </h3>

    <div class="row g-0 text-center">
      <div
        v-for="(itemModule, index) in modules"
        :key="index"
        :class="['col-12 px-2 my-3', modules.length <= 3 ? 'col-sm' : 'col-sm-3']"
      >
        <div class="card bg-dark-subtle border-0 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-white">
              {{ itemModule.titleModule }}
            </h5>
            <hr>
            <p class="card-text text-white truncate-text-line">
              {{ itemModule.descriptionModule }}
            </p>
            <button class="btn gradient-purple text-white" @click="changeRouteLessons(itemModule.uuid)">
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
import { useDaysStore } from "@/store/daysStore.js";
import { mapActions } from "pinia";
import { getAllSprints } from "@/requests/sprintsRequest";

export default {
  data: () => {
    return {
      modules: []
    };
  },
  async mounted() {
    await this.initialize();
  },
  methods: {
    ...mapActions(useDaysStore, ["getDaysBySprintUuid"]),
    changeRouteLessons(uuid) {
      this.getDaysBySprintUuid(uuid);
      this.$router.push({ name: "lessons-day" });
    },
    async initialize() {
      const response = await getAllSprints();
      this.modules = response.map(value => {
        return {
          titleModule       : value.title,
          descriptionModule : value.desc,
          uuid              : value.uuid
        };
      });
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