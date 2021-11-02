<template>
  <view class="box">
    <view class="cu-bar tabbar flex" :class="themeColor?`bg-${themeColor}`:'bg-black'">
      <view v-for="(item, index) in tabList" :key="index" class="flex-sub">
        <view
          class="action"
          :class="item.active ? 'text-orange' : 'text-withe'"
          @click="switchTab(index)"
        >
          <view :class="item.icon">
            <view
              v-if="item.cuTag != '' && carTNum >= 1"
              class="cu-tag"
              :class="item.cuTag"
            >
              {{ carTNum }}
            </view>
          </view>
          {{ item.name }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      themeColor: this.myCommonColor.themeColor,
      tabList: [
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
        // {
        //   name: "购物车",
        //   icon: "cuIcon-cart",
        //   active: false,
        //   page: "/pages/cart",
        //   cuTag: "badge"
        // },
        {
          name: "我的",
          icon: "cuIcon-my",
          active: false,
          page: "/pages/my",
          cuTag: ""
        }
      ],
      carTNum: 1
    }
  },
  methods: {
    switchTab(index) {
      const list = this.tabList
      list.forEach((item, i) => {
        if (i === index) {
          item.active = true
          if (item.name === "购物车") {
            item.cuTag = ""
          }
        } else {
          item.active = false
          if (item.name === "购物车") {
            item.cuTag = "badge"
          }
        }
      })
      this.tabList = list
      this.$emit('switchPage', list[index])
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
