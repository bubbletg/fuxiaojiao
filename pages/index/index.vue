<template>
  <view>
    <CuCustom :bgColor="`bg-${themeColor} text-white`" >
    </CuCustom>
    <view style="margin-bottom: calc(100upx + env(safe-area-inset-bottom) / 2)">
      <Home v-if="currentPage == '/pages/home'" />
      <view class="" v-if="currentPage == '/pages/classify'">分类</view>
      <view class="" v-if="currentPage == '/pages/points'">积分</view>
      <Calendar v-if="currentPage == '/pages/calendar'" />
      <My class="" v-if="currentPage == '/pages/my'" @switchPage="switchPage" />
    </view>
    <Tabber @switchPage="switchPage" :currentPage="currentPage"/>
  </view>
</template>

<script>
import CuCustom from "@/components/cu-custom.vue"
import Home from "@/pages/home/home.vue"
import My from "@/pages/my/my.vue"
import Calendar from "@/pages/calendar/calendar.vue"
import Tabber from "@/components/tabber/tabber.vue"
export default {
  components: {
    Home,
    My,
    Calendar,
    Tabber,
    CuCustom
  },
  data() {
    return {
      currentPage: "/pages/my",
      title: "Hello",
      tabCurrentIndex: 0, // 默认底部初始索引
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
