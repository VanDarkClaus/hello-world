<template>
    <div class="hw-shop">
        <div class="hw-shop-left">
            <router-link
             tag="li"
             class="hw-shop-left_li"
             v-for="item in list"
             :key="item.id"
             v-html="item.name"
             :to='`/shop/${item.id}`'
            ></router-link>
        </div>
        <div class="hw-shop-right">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'shop',
    data() {
        return {
            list: [],
        }
    },
    created() {
        this.$http.getTab()
        .then(resp=>{
            resp.data.list.shift()
            this.list = resp.data.list
            this.$nextTick(()=>{
                if(this.$route.params.cid){
                    this.$router.push({path: `/shop/${this.$route.params.cid}`})
                }else {
                    this.$router.push({path: `/shop/${this.list[0].id}`})
                }
            })
        })
    }
}
</script>

<style lang="scss">
    .hw-shop {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        .router-link-exact-active, .router-link-active{
                background: white;
                border-left: 2px solid blue;
            }
        &-left {
            width: 30%;
            height: 100%;
            overflow: auto;
            background: #999;
            &_li {
                height: 30px;
                line-height: 30px;
                text-align: center;
            }
        }
        &-right {
            width: 70%;
            height: 100%;
            overflow: auto;
        }
    }
</style>
