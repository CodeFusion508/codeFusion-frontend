<template>
    <main>
        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="liveToast" :class="['toast hide', layout ? 'activeted':'']" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header bg-danger">
                    <img src="../pages/assets/warning.png" width="32" class="rounded me-2">
                    <strong class="me-auto text-white">{{ title }}</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    {{ text }}
                </div>
            </div>
        </div>
    </main>
</template>

<style>
.activeted {
    display: block !important;
}
</style>

<script>
import { storeToast } from '../store/toastStore'
import { mapState } from 'pinia'
export default {
    computed: {
        ...mapState(storeToast, ["text", "title", "layout"])
    }
}
</script>