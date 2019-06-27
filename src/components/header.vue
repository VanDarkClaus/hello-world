<template>
<mt-header class="hw-header" :title="headerTitle">
  <div slot="left">
    <mt-button icon="back" @click="goBack()">返回</mt-button>
  </div>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    methods: {
        goBack() {
            history.go(-1)
        }
    },
    computed: {
        ...mapState(['headerTitle'])
    }
}
</script>

<style lang="scss" scoped>
    .hw-header {
        height: 100%;
    }
</style>
