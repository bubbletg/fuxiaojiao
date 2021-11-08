<template>
  <view>
    <CuCustom
      :isBack="true"
      :bgColor="`bg-${themeColor} text-white`"
      :backUrl="backUrl"
    >
    </CuCustom>
    <view class="aboutus">
      <view class="margin">福小饺</view>
      <view class="margin">v1.0.0</view>
      <view class="margin">个人开发者：BubbleTG</view>
      <view class="margin">UI组件：https://github.com/weilanwl/ColorUi</view>
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

<style scoped lang="scss">
.aboutus {
  margin: 20upx;
  padding: 20upx;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
