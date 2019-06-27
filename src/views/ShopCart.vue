<template>
<div>
      <div
        class="hw-shopCart"
        v-for="item in cart"
        :key="item.id"
    >   
    <label class="hw-shopCart-checkbox">
        <input type="checkbox" :checked="item.isChecked" @click="toggleChecked(item.id)">
        <span></span>
    </label>
        <img :src="item.image" alt="">
        <div class="hw-shopCart-box">
            <h4>{{item.title}}</h4>
            <div class="hw-shopCart-box_details">
                <div>{{item.price | toFixed2}}</div>
                <div class="crement">
                    <button @click="decrement(item.id)">-</button>
                    <input type="text" :value="item.amount">
                    <button @click="increment(item.id)">+</button>
                </div>
            </div>
        </div>
    </div>  
    <div>
        总价为：{{sumPrice | toFixed2}}
    </div>
</div>

</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['sumPrice'])
    },
    methods: {
        ...mapMutations(['increment', 'decrement', 'toggleChecked'])
    }
}
</script>

<style lang="scss" scoped>
    .hw-shopCart {
        display: flex;
        width: 100%;
        height: 25vw;
        img {
            width: 20vw;
            height: 20vw;
        }
        &-checkbox {
            width: 10vw;
            line-height: 25vw;
            text-align: center;
            input {
                display: none;
                &:checked + span {
                background-color: #26a2ff;
                border-color: #26a2ff;

                &:after {
                    position: absolute;
                    content: '';
                    width: 10px;
                    height: 5px;
                    border: 2px solid #fff;
                    border-width: 0 0 2px 2px;
                    transform: rotateZ(-45deg);
                    left: 2px;
                    top: 3px;
                }
                }
            }
            span {
                display: inline-block;
                width: 16px;
                height: 16px;
                border: 1px solid #999;
                position: relative;
                border-radius: 3px;
            }
        }

        &-box {
            width: 60vw;
            margin: 2vw;
            h4 {
                width: 100%;
                height: 8vw;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 1vw;
            }
            &_details {
                display: flex;
                justify-content: space-between;
                &.crement {
                    display: flex;
                }
                input {
                    max-width: 10vw;
                    text-align: center;
                }
            }
        }
    }
</style>
