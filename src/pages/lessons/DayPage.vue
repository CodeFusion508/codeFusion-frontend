<template>
  <nav-bar />
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-12 pb-3">
        <div class="row justify-content-between">
          <div v-for="(item, index) in days" :key="index" class="col-sm px-3">
            <div
              :class="[
                'content-item-day d-flex justify-content-center align-items-center',
                indexContent === index ? 'content-activated' : ''
              ]"
              @click="getContent(index, item.uuid)"
            >
              <h6>Día {{ index + 1 }}</h6>
            </div>
          </div>
        </div>
      </div>
      <div v-if="layoutTimeLine" class="col-md-12 col-sm-12 col-lg-12 col-12">
        <time-line :index="indexContent" :list-task="result" :day="days[indexContent]" />
      </div>
    </div>
  </div>
  <nav-footer />
</template>

<script>
import { mapActions, mapState } from "pinia";

import { useDaysStore } from "../../store/lessons/daysStore.js";
import { useSprintsStore } from "../../store/lessons/sprintsStore.js";
import { useContentStore } from "../../store/lessons/contentStore.js";

import TimeLine from "@/modules/DayPage/TimeLine.vue";

export default {
  components: {
    "time-line": TimeLine
  },
  data() {
    return {
      indexContent   : 0,
      layoutTimeLine : false
    };
  },
  computed: {
    ...mapState(useDaysStore, ["days"]),
    ...mapState(useSprintsStore, ["sprintUuid"]),
    ...mapState(useContentStore, ["result"])
  },
  async created() {
    if (this.sprintUuid === "") this.$router.push({ name: "lessons" });

    await this.getDaysByModule();

    await this.getContent(0, this.days[0].uuid);
  },
  methods: {
    ...mapActions(useDaysStore, ["getDaysByModule"]),
    ...mapActions(useContentStore, ["getByContent"]),
    async getContent(index, uuid) {
      this.layoutTimeLine = false;
      this.indexContent = index;

      await this.getByContent(uuid);

      this.layoutTimeLine = true;
    }
  }
};
</script>

<style scoped>
.content-item-day {
  height: 55px;
  border-bottom: 1px solid #727cf5;
  cursor: pointer;
}

.content-item-day:hover {
  background-color: rgba(114, 124, 245, 0.09);
}

.content-activated {
  background-color: rgba(114, 124, 245, 0.09);
}
</style>