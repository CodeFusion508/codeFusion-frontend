<template>
  <GoogleLogin :callback="callback" />
</template>

<script>
import { decodeCredential } from "vue3-google-login";
import { mapActions } from "pinia";

import { useAuthStore } from "@/store/authStore.js";

export default {
    data() {
        return {
            callback: (response) => {
                const userData = decodeCredential(response.credential);
                this.setEmail(userData.email);
                let userName = userData.email.split("@")[0];

                this.setName(userName);
                this.setPassword(userData.jti);

                this.$emit("logged-in", true);
            }
        };
    },
    methods: {
        ...mapActions(useAuthStore, ["setEmail", "setName", "setPassword"])
    }
};
</script>

<style scoped></style>