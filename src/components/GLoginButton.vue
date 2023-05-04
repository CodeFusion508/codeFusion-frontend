<template>
    <main>
        <GoogleLogin :callback="callback" :button-config="buttonConfig" class="w-50" />
    </main>
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "@/store/userStore.js";
export default {
    data() {
        return {
            buttonConfig: {
                width: 270,
                theme: "filled_blue"
            }
        };
    },
    methods: {
        ...mapActions(useUserStore, ["setAvatar"]),
        callback(response) {
            try {
                this.$emit("credential", response.credential);
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style scoped></style>