<template>
    <div
        v-show="isShow"
        class="hw-backtop"
        @click="scrollTop()"
        v-back-top="{scrollContainer, toggleShow}"
    >
        TOP
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false
        }
    },
    //接受传回容器
    props: ['scrollContainer'],
    methods: {
        //回到顶部
        scrollTop () {
            document.querySelector(this.$props.scrollContainer).scrollTop = 0
        },
        toggleShow (isShow) {
            this.isShow = isShow
        }
    },
    directives: {
        backTop: {
            inserted: function (el, binding) {
                console.log(binding.value.scrollContainer)
                document.querySelector(binding.value.scrollContainer).addEventListener('scroll', (e)=>{
                    binding.value.toggleShow(e.target.scrollTop > 600)
                }, false)
            }
        }
    }
}
</script>

<style>
    .hw-backtop {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        line-height: 60px;
        text-align: center;
        background: rgba(255, 0, 0, .8);
        position: fixed;
        right: 30px;
        bottom: 80px;
    }
</style>
