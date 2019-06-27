<template>
    <div class="hw-footer">
        <router-link
         class="hw-footer-li"
         v-for="item in footerList"
         tag="li"
         :key="item.id"
         :to="item.path"
        :event="$route.path.includes(item.path) ? '' : 'click'"
         >
            <span class="iconfont" v-html="item.meta.font"></span>
            <span>{{item.meta.title}}</span>
        </router-link>
        <div class="hw-footer-sum" v-if="sumNum > 0">{{sumNum | more100}}</div>
    </div>
</template>

<script>
import router from '@/router.js'
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            footerList: [],
        }
    },
    created() {
        this.footerList = router.options.routes.filter(item => item.meta.isTableBar)
    },
    computed: {
        ...mapGetters(['sumNum'])
    }
}
</script>

<style lang="scss">
    .hw-footer {
        width: 100%;
        height: 100%;
        display: flex;
        border-top: 1px solid #6e6e6e;
        box-sizing: border-box;
        position: relative;
        &-li {
            &.router-link-exact-active, &.router-link-active{
                color: blue;
            }
            flex: 1;
            justify-content: center;
            padding: 8px;
            span {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
        &-sum {
            position: fixed;
            bottom: 10vw;
            right: 38vw;
            z-index: 20;
            width: 40px;
            height: 20px;
            background: red;
            color: white;
            border-radius: 10px;
            text-align: center;
            line-height: 20px;
        }
    }
</style>
