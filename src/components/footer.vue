<template>
    <div class="hw-footer">
        <router-link
         class="hw-footer-li"
         v-for="item in footerList"
         tag="li"
         :key="item.id"
         :to="item.path"
         >
            <span class="iconfont" v-html="item.meta.font"></span>
            <span>{{item.meta.title}}</span>
        </router-link>
    </div>
</template>

<script>
import router from '@/router.js'

export default {
    data() {
        return {
            footerList: [],
        }
    },
    created() {
        this.footerList = router.options.routes.filter(item => item.meta.isTableBar)
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
    }
</style>
