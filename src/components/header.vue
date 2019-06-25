<template>
<mt-header class="hw-header" title="long long long long title">
  <div slot="left">
    <mt-button icon="back" @click="goBack()">返回</mt-button>
  </div>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
</template>

<script>
export default {
    methods: {
        goBack() {
            console.log(history.go(-1))
        }
    }
}
</script>

<style lang="scss" scoped>
    .hw-header {
        height: 100%;
    }
</style>
