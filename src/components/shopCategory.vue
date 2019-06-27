<template>
    <div
        class="hw-cate"
        v-infinite-scroll="getData"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
            <div
                class="hw-cate-box"
                v-for="prod in categories" 
                :key="prod.id"
            >
                <img :src="prod.image" alt="" class="hw-cate-box_img">
                <div class="hw-cate-box_text">
                    <div class="title">{{prod.title}}</div>
                    <div class="price">￥{{prod.price}}</div>
                </div>
                <div
                    class="hw-cate-box_add"
                    @click="addToCart({
                        id: prod.id,
                        price: prod.price,
                        title: prod.title,
                        image: prod.image,
                        amount: 1,
                        isChecked: true
                    })"
                >加入购物车</div>
            </div>
            <back-top
                scroll-container = ".hw-shop-right"
            ></back-top>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    data() {
        return {
            categories: [],
            page: 1,
            loading: false
        }
    },
    methods: {
        ...mapMutations(['addToCart']),
        getData() {
            this.loading = true
            this.$http.getCategories(this.$route.params.cid, this.page)
                .then(resp =>{
                    this.categories = [...this.categories,...resp.data.list]
                    this.page++
                    this.loading = false
             })
        }
    },
    // created() {
    //     this.getData()
    // },
    // watch() {
    // }
    //进入前先加载一次
    beforeRouteEnter(to, from, next) {
        next(vm => {
           vm.getData()
        })
    },
    //每次点击在加载一次
    beforeRouteUpdate(to, from, next) {
        this.categories = []
        this.page = 1
        next()
        this.getData()
    }
}
</script>

<style lang="scss">
    .hw-cate {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        &-box {
            font-size: 12px;    
            width: 34vw;
            height: 60vw;
            margin: 0 0.5vw;
            &_img {
                width: 34vw;
                height: 34vw;
            }
            &_add {
                width: 100%;
                height: 30px;
                font-size: 16px;
                background: #562314;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &_text {
                width: 100%;
                height: 17vw;
                .title {
                    height: 11vw;
                    font-size: 14px;
                    overflow: auto;
                }
                .price {
                    color: red;
                    font-size: 20px;
                }
            }
        }
    }
</style>
