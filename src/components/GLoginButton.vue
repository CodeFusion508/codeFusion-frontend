<template>
    <GoogleLogin :callback="callback" class="col-sm-12">
        <button class="btn-google-logIn">
            <div class="row">
                <div class="col-2 img-google" ></div>
                <div class="col-10 text-center" >
                    Iniciar / Crear cuenta con Google
                </div>
            </div>
        </button>
    </GoogleLogin>
</template>

<style scoped>
.btn-google-logIn {
    width: 100%;
    height: 45px;
    border: none !important;
}
.img-google {
    background-image: url('../pages/assets/google.png');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 50%;
}
</style>

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