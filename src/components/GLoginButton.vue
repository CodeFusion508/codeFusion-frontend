<template>
  <main>
    <GoogleLogin :callback="callback" :button-config="buttonConfig" class="w-50" />
  </main>
</template>

<script>
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
        callback(response) {
            try {
                this.$emit("credential", response.credential);
            }
            catch (error) {
                this.$emit("credential", "no credential bruhhhh");
                console.log(error);
            }
        }
    }
};
</script>

<style scoped></style>