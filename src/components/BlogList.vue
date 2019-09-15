<template>
    <div>
        <div class="list-wrapper" v-for="item in list" :key="item.id">
            <router-link
                    :to="{path: '/detail', query: {id:`${item.id}`}}"
                    class="list-title"
            >{{item.title}}</router-link>
            <p>{{item.createtime}}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "BlogList",
        data() {
            return {
                list: []
            }
        },
        methods: {
          onGoToDetailPage (id) {
              this.$router.push({
                  path: '/detail',
                  query: {
                      id: `${id}`
                  }
              })
          }
        },
        mounted() {
            axios.get('http://localhost:8000/api/blog/list').then(result => {
                const list = result.data.data
                this.list = list
            })
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
