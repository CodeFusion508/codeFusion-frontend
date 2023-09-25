<template>
  <nav-bar />
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12 "  v-for="(item, index) in days" >
        <div class="col-sm-12 text-center text-white py-3 my-3 position-relative" style="background-color: #1A1D20;" >
          <b>Día {{ index + 1 }}</b>
          <br>
          <b>{{ item.desc }}</b>
          <div class="text-white style-dropdown-arrows" @click="getByContent(index)">
            <i  v-if="item.layout" class="fa-solid fa-angle-up"  role="button"></i>
            <i v-else class="fa-solid fa-angle-down" role="button"></i>
          </div>
        </div>
        <time-line v-if="item.layout" :index="index" :list-task="item.result" :day="days[index]" />
      </div>
      

      <!-- <div class="col-sm-12 col-md-12 col-lg-12 col-12 pb-3">
        <div class="col-sm-12" >
          <div class="text-center col-sm-12" >
            <b></b>
          </div>
        </div>
        <div class="row justify-content-between">
          <div :key="index" class="col-sm px-3">
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
      </div> -->
    </div>
  </div>
  <nav-footer />
</template>
<script>
import { mapActions, mapState } from "pinia";

import { useDaysStore } from "@/store/lessons/daysStore.js";

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


.style-dropdown-arrows {
  position: absolute;
  left: 95%;
  top: 50%;
  transform: translate(-95%, -50%);
}
</style>