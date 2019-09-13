<template>
    <div>
        <div>{{detail.title}}</div>
        <div>{{detail.createtime}} -- {{detail.author}}</div>
        <div>{{detail.content}}</div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Detail",
        data () {
            return {
                detail: {}
            }
        },
        mounted () {
            const {id} = this.$route.query
            axios.get(`http://localhost:8000/api/blog/detail`, {
                params: {
                    id: `${id}`
                }
            }).then(result => {
                this.detail = result.data.data
            })
        }
    }
</script>

<style scoped>

</style>
