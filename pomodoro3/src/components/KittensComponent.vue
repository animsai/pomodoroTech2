<template>
    <div>
        <img :src="catimgsrc">
    </div>

</template>

<script>
    export default {
        name: "KittensComponent",
        data() {
            return {
                catimgsrc: "http://thecatapi.com/api/images/get?size=med"
            }
        }
    }
</script>

<style scoped>

</style>