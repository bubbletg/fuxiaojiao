<template>
  <view>
    <CuCustom :bgColor="`bg-${themeColor} text-white`" >
    </CuCustom>
    <view style="margin-bottom: calc(100upx + env(safe-area-inset-bottom) / 2)">
      <Home v-if="currentPage == '/pages/home'" />
      <view class="" v-if="currentPage == '/pages/classify'">分类</view>
      <view class="" v-if="currentPage == '/pages/points'">积分</view>
      <view class="" v-if="currentPage == '/pages/cart'">购物车</view>
      <My class="" v-if="currentPage == '/pages/my'" />
    </view>
    <Tabber @switchPage="switchPage" />
  </view>
</template>

<script>
import CuCustom from "@/components/cu-custom.vue"
import Home from "@/pages/home/home.vue"
import My from "@/pages/my/my.vue"
import Tabber from "@/components/tabber/tabber.vue"
export default {
  components: {
    Home,
    My,
    Tabber,
    CuCustom
  },
  data() {
    return {
      currentPage: "/pages/my",
      title: "Hello",
      themeColor: this.myCommonColor.themeColor // 全局主题
    }
  },
  methods: {
    switchPage(e) {
      this.currentPage = e.page
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
