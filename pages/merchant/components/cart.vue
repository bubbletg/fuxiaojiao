<template>
  <!-- 购物车 -->
  <view class="cu-bar bg-white tabbar border shop cart">
    <view class="action">
      <view class="cuIcon-cart">
        <view class="cu-tag badge">99</view>
      </view>
      购物车
    </view>
    <view class="btn-group">
      <view>你好啊</view>
      <button class="cu-btn bg-red round shadow-blur">立即订购</button>
    </view>
  </view>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
