<template>
  <nav-bar />

  <div v-for="(item, index) in modules" :key="index">
    <h3 class="text-center mt-3 fw-light fst-italic text-white">
      Sección {{ index.split('_')[1] }}
    </h3>

    <div class="row g-0 text-center">
      <div
        v-for="(itemModule, index) in modules[index]"
        :key="index"
        :class="['col-12 px-2 my-3', modules.length <= 3 ? 'col-sm' : 'col-sm-3']"
      >
        <div class="card bg-dark-subtle border-0 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-white">
              {{ itemModule.title }}
            </h5>
            <hr>
            <p class="card-text text-white truncate-text-line">
              {{ itemModule.desc }}
            </p>
            <button class="btn gradient-purple text-white" @click="changeRouteLesseans(itemModule.uuid)">
              Aprende
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </div>

  <nav-footer />
</template>

<script>
import { useDaysStore } from '@/store/daysStore.js'
import { mapActions } from 'pinia'
import { getAllSprints } from '@/requests/sprintsRequest'
export default {
  data: () => {
    return {
      modules: []
    };
  },
  methods: {
    ...mapActions(useDaysStore, ["setDaysBySprintUuid"]),
    changeRouteLesseans(uuid) {
      this.setDaysBySprintUuid(uuid)
      this.$router.push({ name: 'leasseans-day' })
    },
    async initialize() {
      const response = await getAllSprints()
      this.modules = response
    }
  },
  async mounted() {
    await this.initialize()
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