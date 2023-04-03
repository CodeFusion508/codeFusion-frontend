<template>
    <nav-bar />
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-12 pb-3">
                <div class="row justify-content-between">
                    <div v-for="(item, index) in days" :key="index" class="col-sm px-3">
                        <div :class="
                            [
                                'content-item-day d-flex justify-content-center align-items-center',
                                indexContentDay === index ? 'content-activeted' : ''
                            ]" @click="getContentDay(item.uuid, index)">
                            <h6>{{ item.title }}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-12 col-12" v-if="contentDays.length >= 1">
                <time-line :day="days[indexContentDay].title" :list-task="contentDays" />
            </div>
        </div>
    </div>
    <nav-footer />
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "../../../store/authStore";
import { useContentDays } from "@/store/contentDays";
import { useModuleStore } from "@/store/moduleStore";
import { useDays } from "@/store/days";

import TimeLine from "./TimeLine.vue";

export default {
    components: { "time-line": TimeLine },
    data: () => {
        return {
            indexContentDay: 0
        };
    },
    computed: {
        ...mapState(useAuthStore, ["authToken"]),
        ...mapState(useDays, ["days"]),
        ...mapState(useContentDays, ["contentDays"]),
    },
    async mounted() {
        await this.getDays()
        if(this.days.length >= 1) {
            await this.getDaysByContentDays(this.days[this.indexContentDay].uuid)
        }
    },
    methods: {
        ...mapActions(useModuleStore, ["getDays"]),
        ...mapActions(useContentDays, ["getDaysByContentDays"]),
        ...mapActions(useDays, ["getDays"]),
        async gDays() {
            // await this.getDays();
        },
        async getContentDay(uuid, index) {
            await this.getDaysByContentDays(uuid)
            this.indexContentDay = index
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