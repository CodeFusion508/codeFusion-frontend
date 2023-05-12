<template>
    <main>
        <div class="d-flex justify-content-center align-items-center" style="height: 50vh;">
            <div class="card" style="width: 35rem;background-color: #212F3D;">
                <div class="card-body">
                    <h5 class="card-title">{{ cofirmAccountCard.title }}</h5>
                    <p class="card-text">{{ cofirmAccountCard.message }}</p>
                    <a href="#" class="btn btn-primary">ir a Página</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { useUserStore } from '@/store/user/userStore'
import { mapActions, mapState } from 'pinia'
export default {
    computed: {
        ...mapState(useUserStore, ["cofirmAccountCard"])
    },  
    methods: {
        ...mapActions(useUserStore, ["confirmAccount"]),
    },
    async mounted() {
        await this.confirmAccount(this.$route.params.token)
    }
}
</script>