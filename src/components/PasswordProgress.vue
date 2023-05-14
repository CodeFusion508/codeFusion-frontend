<template>
  <div v-if="password.length >= 1" class="progress mt-1" style="height: 5px;">
    <div
      :class="['progress-bar', passObj.colorProgress]"
      role="progressbar"
      :style="{ 'width': passObj.passProgress + '%' }"
      aria-valuemin="0"
      aria-valuemax="100"
    />
  </div>
  <div v-if="password.length >= 1" class="text-end">
    <small>{{ passObj.passType }}</small>
  </div>
</template>

<script>
export default {
    props: {
        password: {
            type    : String,
            default : () => ""
        }
    },
    data() {
        return {
            passObj: {
                min           : 8,
                strong        : 15,
                message       : "",
                colorProgress : {
                    "weak"    : "bg-danger",
                    "regular" : "bg-warning",
                    "strong"  : "bg-success"
                },
                passProgress : 0,
                maxProgress  : 100,
                color        : "",
                passType     : ""
            },
            passErrorMessage: ""
        };
    },
    methods: {
        checkPassword() {
            const passwordLength = this.password.length;
            let progress = (passwordLength * 100) / this.passObj.strong;
            let color = "";
            let type = "";

            if (passwordLength >= 1 && passwordLength < this.passObj.min) {
                color = this.passObj.colorProgress.weak;
                type = "Débil";
            } else if (passwordLength >= this.passObj.min && passwordLength < this.passObj.strong) {
                color = this.passObj.colorProgress.regular;
                type = "Regular";
            } else {
                color = this.passObj.colorProgress.strong;
                progress = this.passObj.maxProgress;
                type = "Fuerte";
            }

            this.passObj.color = color;
            this.passObj.passProgress = progress;
            this.passObj.passType = type;
        }
    }
};
</script>