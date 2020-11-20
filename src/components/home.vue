<template>
  <div class="home_container">
    <itemcontainer father-component="home"></itemcontainer>
  </div>
</template>

<script>
import itemcontainer from './itemcontainer'

export default {
  name: 'home',
  components: {
    itemcontainer
  }
}
</script>

<style scoped>
</style>
