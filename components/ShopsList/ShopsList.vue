<template>
  <view class="shops-list" 
  @click="ceshi01"> 111111111111q11111111111111111111 </view>
</template>

<script>
export default {
  methods:{
    ceshi01() {
      this.$emit('ceshi01',11112345654321)
    }
  }
}
</script>

<style lang="scss" scoped>
.shops-list {
  width: 100vw;
  background-color: red;
}
</style>
