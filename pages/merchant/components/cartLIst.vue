<template>
  <view class="cart-list solid-top">
    <view class="text-center text-sm padding-xs" :class="themeColor?`bg-${themeColor}`:''">已经优化20元</view>
    <view class="flex justify-end padding-sm solid-bottom">
      <view class="text-xs text-gray">
        <text class="lg cuIcon-deletefill"></text>
        清空购物车
      </view>
    </view>
    <scroll-view scroll-y class="cart-list-scroll">
      <CarListItem v-for="(item, index) in list" :key="index" />
    </scroll-view>
  </view>
</template>

<script>
import CarListItem from "./carListItem.vue"
export default {
  components: {
    CarListItem
  },
  data() {
    return {
      list: [1, 2, 3, 4],
      themeColor: this.myCommonColor.themeColor // 全局主题
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-list {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 650upx;
  border-radius: 20upx 20upx 0 0;
  overflow: hidden;
  background-color: white;
  z-index:1;
  &-scroll {
    max-height: 400upx;
    margin: 0 0 120upx 0;
  }
}
</style>
