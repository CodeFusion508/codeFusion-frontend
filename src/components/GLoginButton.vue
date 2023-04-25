<template>
    <main>
        <GoogleLogin :callback="callback" class="col-sm-12 btn-google-logIn img-google" />
    </main>
</template>

<script>
import { decodeCredential } from "vue3-google-login";
import { mapActions } from "pinia";
import { useAuthStore } from "@/store/authStore.js";
export default {
    data() { return {} },
    methods: {
        ...mapActions(useAuthStore, ["setEmail", "setName", "setPassword"]),
        callback(response) {
            try {
                const userData = decodeCredential(response.credential);
                this.$emit("credential", response.credential);
                this.setEmail(userData.email);
                
                let userName = userData.email.split("@")[0];
    
                this.setName(userName);
                this.setPassword(userData.jti);
                this.$emit("logged-in", true);
                
            } catch (error) {
                console.log(error)
            }
        }
    }
};
</script>

<style scoped></style>