<template>
  <nav-bar />
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-12 pb-3">
        <div class="row justify-content-between">
          <div v-for="(item, index) in days" :key="index" class="col-sm px-3">
            <div
              :class="
                [
                  'content-item-day d-flex justify-content-center align-items-center',
                  indexContent === index ? 'content-activated' : ''
                ]"
              @click="getContent(item.uuid, index)"
            >
              <h6>{{ index }}</h6>
            </div>
          </div>
        </div>
      </div>
      <div v-if="result.length >= 1" class="col-md-12 col-sm-12 col-lg-12 col-12">
        <time-line :index="indexContent" :list-task="result" :day="days[indexContent]" />
      </div>
    </div>
  </div>
  <nav-footer />
</template>

<script>
import { mapActions, mapState } from "pinia";

import { useAuthStore } from "@/store/authStore";
import { useDaysStore } from "@/store/daysStore";

import TimeLine from "./TimeLine.vue";

export default {
  components : { "time-line": TimeLine },
  data       : () => {
    return {
      indexContent: 0
    };
  },
  computed: {
    ...mapState(useAuthStore, ["authToken"]),
    ...mapState(useDaysStore, ["days", "result"])
  },
  async mounted() {
    await this.getDays();

    if (this.days.length >= 1) {
      await this.getContent(this.days[this.indexContent].uuid);
    }
  },
  methods: {
    ...mapActions(useDaysStore, ["getDays", "getByContent"]),

    async getContent(uuid, index) {
      await this.getByContent(uuid);

      this.indexContent = index;
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