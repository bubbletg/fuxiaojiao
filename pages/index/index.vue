<template>
  <view>
    <view class="content">
      <view class="" v-if="currentPage == '/pages/index'">首页</view>
      <view class="" v-if="currentPage == '/pages/classify'">分类</view>
      <view class="" v-if="currentPage == '/pages/points'">积分</view>
      <view class="" v-if="currentPage == '/pages/cart'">购物车</view>
      <view class="" v-if="currentPage == '/pages/my'">我的</view>
    </view>
    <Tabber @switchPage="switchPage" />
  </view>
</template>

<script>
import Tabber from "@/components/tabber/tabber.vue"
export default {
  components: {
    Tabber
  },
  data() {
    return {
      currentPage: "/pages/index",
      title: "Hello"
    }
  },
  onLoad() {},
  methods: {
    switchPage(e) {
      this.currentPage = e.page
    }
  }
}
</script>

<style>
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
