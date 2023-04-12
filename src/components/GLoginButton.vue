<template>
  <GoogleLogin :callback="callback"/>
</template>
<script>
import { decodeCredential } from "vue3-google-login";
import {mapActions} from "pinia";
import {useAuthStore} from "@/store/authStore.js";
export default {
    name: "g-login-button",
    data() {
        return {
            callback: (response) => {
                const userData = decodeCredential(response.credential);
                this.setEmail(userData.email);
                let userName = userData.email.split("@")[0];
                console.log("userName", userName);
                this.setName(userName);
                this.setPassword(userData.jti);
                console.log("Handle the userData", userData);
                this.$emit("loggedIn", true);
            }
        };
    },
     methods: {
        ...mapActions(useAuthStore, ["setEmail", "setName", "setPassword"])
    }
};
</script>

<style scoped>

</style>