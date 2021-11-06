<template>
  <view>
    <CuCustom :bgColor="`bg-${themeColor} text-white`"> </CuCustom>
    <view style="margin-bottom: calc(100upx + env(safe-area-inset-bottom) / 2)">
      <Home v-if="currentPage == '/pages/home'" />
      <view class="" v-if="currentPage == '/pages/classify'">分类</view>
      <view class="" v-if="currentPage == '/pages/points'">积分</view>
      <Order v-if="currentPage == '/pages/order'" />
      <My class="" v-if="currentPage == '/pages/my'" @switchPage="switchPage" />
    </view>
    <Tabber
      :tabList="tabList"
      @switchPage="switchPage"
      :currentPage="currentPage"
    />
  </view>
</template>

<script>
import Home from "@/pages/home/home.vue"
import My from "@/pages/my/my.vue"
import Order from "@/pages/order/order.vue"
import Tabber from "@/components/tabber/tabber.vue"
export default {
  components: {
    Home,
    My,
    Order,
    Tabber
  },
  data() {
    return {
      tabList: [],
      currentPage: "/pages/order",
      title: "Hello",
      themeColor: this.myCommonColor.themeColor // 全局主题
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.tabList = [
        {
          name: "首页",
          icon: "cuIcon-homefill",
          active: true,
          page: "/pages/home",
          cuTag: "" // 标签类型
        },
        //  todo 第一版先不做
        // {
        //   name: "分类",
        //   icon: "cuIcon-similar",
        //   active: false,
        //   page: "/pages/classify",
        //   cuTag: ""
        // },
        // {
        //   name: "积分",
        //   icon: "cuIcon-recharge",
        //   active: false,
        //   page: "/pages/points",
        //   cuTag: ""
        // },
        {
          name: "订单",
          icon: "cuIcon-calendar",
          active: false,
          page: "/pages/order",
          cuTag: ""
        },
        {
          name: "我的",
          icon: "cuIcon-my",
          active: false,
          page: "/pages/my",
          cuTag: ""
        }
      ]
    },
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
