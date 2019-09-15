<template>
    <div>
        <el-button @click="onNewBlog">新增博客</el-button>
<!--        <router-view></router-view>-->
    </div>
</template>

<script>
    export default {
        name: "edit",
        methods: {
            onNewBlog () {
                this.$router.push('/new')
            }
        }
    }
</script>

<style scoped>

</style>
