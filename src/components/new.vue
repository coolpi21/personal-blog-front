<template>
    <div>
        <el-input
                v-model="title"
        />
        <el-input
                type="textarea"
                v-model="content"
        />
        <el-button
                @click="commitBlog"
        >提交
        </el-button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "newBlog",
        data() {
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            commitBlog() {
                axios.post('http://localhost:8000/api/blog/new', {
                    title: this.title,
                    content: this.content,
                    author: 'admin'
                }).then(result => {
                    if (result.data.errno === 0) {
                        this.$router.push('/')
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
