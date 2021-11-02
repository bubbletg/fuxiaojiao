<template>
  <view class="cu-list menu-avatar">
    <view class="cu-item">
      <view
        class="cu-avatar radius lg"
        style="background-image: url('../../static/swiper/123213.jpg')"
      ></view>
      <view class="content">
        <view :class="themeColor ? `text-${themeColor}`: 'text-pink'"><text class="text-cut">莫甘娜</text></view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">凯尔，你被自己的光芒变的盲目！</text></view
        >
        <view>
          <text class="text-red text-xs">¥</text>
          <text class="text-red">20</text>
          <text class="text-dd text-sm margin-left-xs">¥20</text>
        </view>
      </view>
      <view class="action">
        <view class="flex align-center">
          <text class="lg text-black cuIcon-move bg-gray round"></text>
          <view class="margin-lr-xs">5</view>
          <text
            class="lg text-black cuIcon-add round"
            :class="themeColor ? `bg-${themeColor}`: 'bg-gray'"></text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      themeColor: this.myCommonColor.themeColor // 全局主题
    }
  }
}
</script>

<style lang="scss" scoped>
.cu-list + .cu-list {
  margin: 0;
}
</style>
