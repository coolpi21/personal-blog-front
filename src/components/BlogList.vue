<template>
    <div>
        <div class="list-wrapper" v-for="item in list" :key="item.id">
            <router-link
                    :to="{path: '/detail', query: {id:`${item.id}`}}"
                    class="list-title"
            >{{item.title}}
            </router-link>
            <p v-show="isShowCreateTime">{{item.createtime}}</p>
            <el-button v-if="isShowBtn" @click="onUpdateBlog(item.id)">更新</el-button>
            <el-button v-if="isShowBtn" @click="onDelBlog(item.id)">删除</el-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "BlogList",
        props: {
            isShowCreateTime: {
                type: Boolean,
                default: true
            },
            isShowBtn: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                list: []
            }
        },
        methods: {
            onGoToDetailPage(id) {
                this.$router.push({
                    path: '/detail',
                    query: {
                        id: `${id}`
                    }
                })
            },
            onDelBlog(id) {
                console.log(id)
                axios.post(`http://localhost:8000/api/blog/del?id=${id}`).then(result => {
                    if (result.data.errno === 0) {
                        this.$message('删除博客成功')
                        this.init()
                    } else {
                        this.$message('删除博客失败')
                    }

                })
            },
            onUpdateBlog(id) {
              this.$router.push({
                  path: '/update',
                  query: {
                      id: id
                  }
              })
            },
            init () {
                axios.get('http://localhost:8000/api/blog/list').then(result => {
                    const list = result.data.data
                    this.list = list
                })
            }
        },
        mounted() {
            this.init()
        }

    }
</script>

<style scoped lang="scss">
    .list-wrapper {
        .list-title {
            font-size: 50px;
        }
    }
</style>
