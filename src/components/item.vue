<template>
  <itemcontainer father-component="item"></itemcontainer>
</template>

<script>
import itemcontainer from './itemcontainer'

export default {
  name: 'item',
  components: {
    itemcontainer
  },
  created () {
    // 进入题目页面，开始计时
    this.$store.commit('REMBER_TIME')
  }
}
</script>
