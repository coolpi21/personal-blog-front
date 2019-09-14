<template>
    <div>
        <div class="input-wrapper">
            <el-input
                    placeholder="请输入用户名"
                    v-model="username"
                    size="small"
                    @change="getUsernameValue"
            ></el-input>
        </div>
        <div class="input-wrapper">
            <el-input placeholder="请输入密码" v-model="password" size="small"></el-input>
        </div>
        <div class="button-wrapper">
            <el-button @click="onSubmitInfo">提交</el-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "admin.vue",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            onSubmitInfo() {
                if (this.username && this.password) {
                    const data = {
                        username: this.username,
                        password: this.password
                    }
                    axios.post(`http://localhost:8000/api/user/login`, data
                    ).then(result => {
                        const {errno, msg} = result.data
                        if (errno === 0) {
                            this.$message({
                                message: msg,
                                duration: 1000
                            })
                            setTimeout(() => {
                                this.$router.push('/edit')
                            },2000)
                            return
                        }
                        this.$message({
                            message: msg,
                            duration: 1000
                        })
                    })
                }
            },
            getUsernameValue(val) {
                console.log(val)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input-wrapper {
        margin: 20px 0 0;
        width: 200px;
    }
</style>
