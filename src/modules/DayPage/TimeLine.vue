<template>
  <main>
    <div class="g-dark-subtle border-0 rounded-lg shadow-dark">
      <div class="card-body">
        <h6 class="card-title text-center py-3">
          <h4>Día {{ index + 1 }}</h4>
          <h3 class="text-center">
            {{ day.desc }}
          </h3>
          <hr class="hr hr-blurry">
        </h6>

        <div class="pb-3">
          <ul class="timeline">
            <li v-for="(obj, ind) in listTask" :key="obj" class="event">
              <div>
                <h3>{{ obj.node.title }}</h3>
                <p>{{ obj.node.desc }}</p>
                <label>Earn {{ obj.node.exp }} experience</label>
                <div class="d-flex justify-content-end">
                  <div class="col-sm-4 col-12">
                    <button
                      class="btn btn-primary form-control"
                      @click="changeRouter(getRouterPath(obj.node.labels), ind)"
                    >
                      Ver selección
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapWritableState } from "pinia";

import { useContentStore } from "../../store/lessons/contentStore.js";

export default {
  props: {
    index: {
      type    : Number,
      default : () => 0
    },
    listTask: {
      type    : Array,
      default : () => []
    },
    day: {
      type    : Object,
      default : () => { return {}; }
    }
  },
  computed: {
    ...mapWritableState(useContentStore, ["contIndex"])
  },
  methods: {
    changeRouter(router = "lessons", ind) {
      this.contIndex = ind;

      this.$router.push({ name: router });
    },
    getRouterPath(labels = []) {
      const secondLabels = labels[1];

      switch (secondLabels) {
        case "Problem":
          return "content-problems";
        case "Video":
          return "content-video";
        case "Text":
          return "content-text";
        case "Quiz":
          return "content-quiz";
        default:
          throw ({ message: "The label not found" });
      }
    }
  }
};
</script>

<style scoped>
body {
  margin-top: 20px;
}

.timeline {
  border-left: 3px solid #727cf5;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(114, 124, 245, 0.09);
  margin: 0 auto;
  letter-spacing: 0.2px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: 50px;
  list-style: none;
  text-align: left;
  max-width: 70%;
}

@media (max-width: 767px) {
  .timeline {
    max-width: 100%;
    padding: 25px;
  }
}

.timeline h1 {
  font-weight: 300;
  font-size: 1.4em;
}

.timeline h2,
.timeline h3 {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 10px;
}

.timeline .event {
  border-bottom: 1px dashed #e8ebf1;
  padding-bottom: 25px;
  margin-bottom: 25px;
  position: relative;
}

@media (max-width: 767px) {
  .timeline .event {
    padding-top: 30px;
  }
}

.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .event:before {
  left: -207px;
  content: attr(data-date);
  text-align: right;
  font-weight: 100;
  font-size: 0.9em;
  min-width: 120px;
}

@media (max-width: 767px) {
  .timeline .event:before {
    left: 0px;
    text-align: left;
  }
}

.timeline .event:after {
  -webkit-box-shadow: 0 0 0 3px #727cf5;
  box-shadow: 0 0 0 3px #727cf5;
  left: -55.8px;
  background: #fff;
  border-radius: 50%;
  height: 9px;
  width: 9px;
  content: "";
  top: 5px;
}

@media (max-width: 767px) {
  .timeline .event:after {
    left: -31.8px;
  }
}

.rtl .timeline {
  border-left: 0;
  text-align: right;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border-right: 3px solid #727cf5;
}

.rtl .timeline .event::before {
  left: 0;
  right: -170px;
}

.rtl .timeline .event::after {
  left: 0;
  right: -55.8px;
}
</style>