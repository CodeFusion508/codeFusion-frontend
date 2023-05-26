<template>
  <main>
    <div class="d-flex justify-content-center align-items-center" style="height: 50vh;">
      <div class="card" style="width: 35rem;background-color: #212F3D;">
        <div class="card-body">
          <h5 class="card-title">
            {{ confirmAccountCard.title }}
          </h5>
          <p class="card-text">
            {{ confirmAccountCard.message }}
          </p>
          <a href="#" class="btn btn-primary">ir a Página</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";

import { useUserStore } from "@/store/user/userStore";

export default {
    computed: {
        ...mapState(useUserStore, ["confirmAccountCard"])
    },
    async mounted() {
        await this.confirmAccount(this.$route.params.token);
    },
    methods: {
        ...mapActions(useUserStore, ["confirmAccount"])
    }

};
</script>