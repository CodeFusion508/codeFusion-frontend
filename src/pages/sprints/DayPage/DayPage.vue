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
                  indexcontent === index ? 'content-activeted' : ''
                ]"
              @click="getContent(item.uuid, index)"
            >
              <h6>{{ item.title }}</h6>
            </div>
          </div>
        </div>
      </div>
      <div v-if="result.length >= 1" class="col-md-12 col-sm-12 col-lg-12 col-12">
        <time-line :day="days[indexcontent].title" :list-task="result" />
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
            indexcontent: 0
        };
    },
    computed: {
        ...mapState(useAuthStore, ["authToken"]),
        ...mapState(useDaysStore, ["days", "result"]),
    },
    async mounted() {
        const res = await this.getDays();
        console.log(res, "content with relations");
        if(this.days.length >= 1) {
            await this.getContent(this.days[this.indexcontent].uuid);
        }
    },
    methods: {
        ...mapActions(useDaysStore, ["getDays", "getByContent"]),

        async getContent(uuid, index) {
            const res = await this.getByContent(uuid);
            console.log(res, "content with relations");
            this.indexcontent = index;
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

.content-activeted {
    background-color: rgba(114, 124, 245, 0.09);
}
</style>