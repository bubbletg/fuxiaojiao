<template>
  <view>
    <!-- 返回 -->
    <view class="fixed">
      <cu-custom :isBack="true" bgColor="bg-shadeTop text-white">
        <block slot="backText">返回</block>
        <block slot="content">垂直导航</block>
      </cu-custom>
    </view>
    <view style="margin-bottom: calc(100upx + env(safe-area-inset-bottom) / 2)">
      <!-- 轮播图 -->
      <swiper
        class="screen-swiper round-dot"
        :indicator-dots="true"
        :circular="true"
        :autoplay="true"
      >
        <swiper-item v-for="(item, index) in 4" :key="index">
          <image src="../../static/swiper/244.jpg" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
      <!-- 列表 -->
      <view class="VerticalBox">
        <scroll-view
          class="VerticalNav nav"
          scroll-y
          scroll-with-animation
          :scroll-top="verticalNavTop"
          style="height: calc(100vh - 375upx)"
        >
          <view
            class="cu-item"
            :class="index == tabCur ? 'text-green cur' : ''"
            v-for="(item, index) in list"
            :key="index"
            @tap="TabSelect"
            :data-id="index"
          >
            Tab-{{ item.name }}
          </view>
        </scroll-view>
        <scroll-view
          class="VerticalMain"
          scroll-y
          scroll-with-animation
          style="height: calc(100vh - 375upx)"
          :scroll-into-view="'main-' + mainCur"
          @scroll="VerticalMain"
        >
          <view
            class="padding-top padding-lr"
            v-for="(item, index) in list"
            :key="index"
            :id="'main-' + index"
          >
            <view class="cu-bar solid-bottom bg-white">
              <view class="action">
                <text class="cuIcon-title text-green"></text> Tab-{{
                  item.name
                }}</view
              >
            </view>
            <view class="cu-list menu-avatar">
              <view class="cu-item">
                <view
                  class="cu-avatar radius lg"
                  style="
                    background-image: url('../../static/swiper/123213.jpg');
                  "
                ></view>
                <view class="content">
                  <view class="text-pink"
                    ><text class="text-cut">莫甘娜</text></view
                  >
                  <view class="text-gray text-sm flex">
                    <text class="text-cut"
                      >凯尔，你被自己的光芒变的盲目！</text
                    ></view
                  >
                </view>
                <view class="action">
                  <view class="text-grey text-xs">22:20</view>
                  <view class="cu-tag round bg-red sm">5</view>
                </view>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
    <Cart />
  </view>
</template>

<script>
import Cart from './components/cart.vue'

export default {
  components: {
    Cart
  },
  data() {
    return {
      list: [],
      tabCur: 0,
      mainCur: 0,
      verticalNavTop: 0,
      load: true
    }
  },
  created() {
    console.log("启动")
    uni.showLoading({
      title: "加载中...",
      mask: true
    })
    let list = [{}]
    for (let i = 0; i < 26; i++) {
      list[i] = {}
      list[i].name = String.fromCharCode(65 + i)
      list[i].id = i
    }
    this.list = list
    this.listCur = list[0]
  },
  onReady() {
    uni.hideLoading()
  },
  methods: {
    TabSelect(e) {
      this.tabCur = e.currentTarget.dataset.id
      this.mainCur = e.currentTarget.dataset.id
      this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
    },
    VerticalMain(e) {
      let that = this
      let tabHeight = 0
      if (this.load) {
        for (let i = 0; i < this.list.length; i++) {
          let view = uni
            .createSelectorQuery()
            .select("#main-" + this.list[i].id)
          view
            .fields(
              {
                size: true
              },
              data => {
                this.list[i].top = tabHeight
                tabHeight = tabHeight + data.height
                this.list[i].bottom = tabHeight
              }
            )
            .exec()
        }
        this.load = false
      }
      let scrollTop = e.detail.scrollTop + 10
      for (let i = 0; i < this.list.length; i++) {
        if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
          this.verticalNavTop = (this.list[i].id - 1) * 50
          this.tabCur = this.list[i].id
          console.log(scrollTop)
          return false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  z-index: 99;
}

.VerticalNav.nav {
  width: 200upx;
  white-space: initial;
}

.VerticalNav.nav .cu-item {
  width: 100%;
  text-align: center;
  background-color: #fff;
  margin: 0;
  border: none;
  height: 50px;
  position: relative;
}

.VerticalNav.nav .cu-item.cur {
  background-color: #f1f1f1;
}

.VerticalNav.nav .cu-item.cur::after {
  content: "";
  width: 8upx;
  height: 30upx;
  border-radius: 10upx 0 0 10upx;
  position: absolute;
  background-color: currentColor;
  top: 0;
  right: 0upx;
  bottom: 0;
  margin: auto;
}

.VerticalBox {
  display: flex;
}

.VerticalMain {
  background-color: #f1f1f1;
  flex: 1;
}
</style>
