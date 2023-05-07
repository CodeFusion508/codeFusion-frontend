<template>
  <main>
    <GoogleLogin :callback="callback" :button-config="buttonConfig" class="w-50" />
  </main>
</template>

<script>
import { mapActions } from "pinia";

import { useUserStore } from "@/store/user/userStore.js";

export default {
    emits: ["credential"],
    data() {
        return {
            buttonConfig: {
                width : 270,
                theme : "filled_blue"
            }
        };
    },
    methods: {
        ...mapActions(useUserStore, ["setAvatar"]),
        callback(response) {
            this.$emit("credential", response.credential);
        }
    }
};
</script>

<style scoped></style>