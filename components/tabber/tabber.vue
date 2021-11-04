<template>
  <view class="box">
    <view
      class="cu-bar tabbar flex"
      :class="themeColor ? `bg-${themeColor}` : 'bg-black'"
    >
      <view v-for="(item, index) in tabListTab" :key="index" class="flex-sub">
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
  props: {
    currentPage: {
      type: String,
      default: ""
    },
    tabList: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      themeColor: this.myCommonColor.themeColor,
      carTNum: 1, // 
      tabListTab: []
    }
  },
  watch: {
    currentPage() {
      const list = this.tabList
      list.forEach((item, i) => {
        if (item.page === this.currentPage) {
          item.active = true
        } else {
          item.active = false
        }
      })
      this.tabList = list
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.tabListTab = this.tabList
    },
    switchTab(index) {
      const list = this.tabListTab
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
      this.tabListTab = list
      this.$emit("switchPage", list[index])
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
