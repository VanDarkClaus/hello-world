<template>
<div>
    <h1>登录界面</h1>
    <button @click="userLogin">用户登录</button>
</div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'

export default {
    methods: {
        ...mapActions(['requireMsg']),
        userLogin() {
            this.requireMsg()
        }
    },
    computed: {
        ...mapGetters(['hasLogin'])
    },
    watch: {
        //监听getters里的hasLogin，判断是否登录
        hasLogin(v){
            if(v) {
                this.$router.push(this.$route.params.to.path)
            }
        }
    }
}
</script>

<style>

</style>
