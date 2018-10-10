<template>
    <h3 v-if="isworking">{{workingtitle}}</h3>
    <h3 v-else>{{restingtitle}}</h3>
</template>

<script>
    export default {
        name: "PomodoroStateComponent",
        data () {
            return {
                workingtitle: 'Work!',
                restingtitle: 'Rest!'
            }
        },
        props: ['isworking']
    }

</script>

<style scoped>

</style>