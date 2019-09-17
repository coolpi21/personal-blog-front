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
                @click="updateBlog"
        >更新
        </el-button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "update",
        data() {
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            updateBlog() {
                const id = this.$route.query.id
                const {content, title} = this
                axios.post(`http://localhost:8000/api/blog/update`, {
                    id: id,
                    content: content,
                    title: title
                }).then(result => {
                    if (result.data.errno === 0) {
                        this.$message(result.data.msg)
                        this.init()
                    } else {
                        this.$message(result.data.msg)
                    }
                    
                })
            },
            init () {
                const {id} = this.$route.query
                axios.get(`http://localhost:8000/api/blog/detail`, {
                    params: {
                        id: `${id}`
                    }
                }).then(result => {
                    this.title = result.data.data.title
                    this.content = result.data.data.content

                })
            }
        },
        mounted() {
            this.init()
        }
    }
</script>

<style scoped>

</style>
