<template>
    <div>
        <el-button @click="onNewBlog">新增博客</el-button>
<!--        <router-view></router-view>-->
        <blog-list
            :is-show-create-time="false"
            :is-show-btn="true"
        />

    </div>
</template>

<script>
    import BlogList from "./BlogList";
    export default {
        name: "edit",
        components: {
            BlogList
        },
        methods: {
            onNewBlog () {
                this.$router.push('/new')
            }
        }
    }
</script>

<style scoped>

</style>
