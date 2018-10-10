<template>
    <div>
        <span id="min">{{min}}</span>:<span id="sec">{{sec}}</span>
    </div>
</template>

<script>
    export default {
        name: "CountdownComponent",
        data () {
            return {
                min: 1,
                sec: 5
            }
        }
    }
</script>

<style scoped>

</style>