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
              @click="getContent(item.uuid, index)"
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

import { useAuthStore } from "@/store/user/authStore.js";
import { useDaysStore } from "@/store/lessons/daysStore.js";

import TimeLine from "@/modules/TimeLine.vue";

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
    ...mapState(useAuthStore, ["authToken"]),
    ...mapState(useDaysStore, ["days", "result", "sprintUuid"])
  },
  async created() {
    if (this.sprintUuid === "") this.$router.push({ name: "lessons" });

    await this.getDaysByModule();

    if (this.days.length >= 1) await this.getContent(this.days[this.indexContent].uuid, 0);
  },
  methods: {
    ...mapActions(useDaysStore, ["getDaysByModule", "getByContent"]),
    async getContent(uuid, index) {
      this.layoutTimeLine = false;
      this.indexContent = index;

      await this.getByContent(uuid);

      this.layoutTimeLine = true;
    }
  }
};
</script>

<style>
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