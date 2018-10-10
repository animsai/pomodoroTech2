<template lang="jade">
    <div>
    <button @click="start()">
    <i class="fas fa-play"></i>
    </button>
    <button @click="pause()">
    <i class="fas fa-pause"></i>
    </button>
    <button @click="stop()">
    <i class="fas fa-stop"></i>
    </button>
    </div>
</template>

<script>
    export default {
        name: "ControlsComponent"
    }
</script>

<style scoped>

</style>