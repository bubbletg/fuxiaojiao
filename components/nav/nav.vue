<template>
  <scroll-view
    scroll-x
    class="bg-white nav"
    scroll-with-animation
    :scroll-left="scrollLeft"
  >
    <view
      class="cu-item"
      :class="index == TabCur ? `text-${themeColor} cur` : ''"
      v-for="(item, index) in navList"
      :key="index"
      @tap="tabSelect"
      :data-id="index"
    >
      {{ item.name }}
    </view>
  </scroll-view>
</template>

<script>
export default {
  props: {
     navList: {
       type: Array,
       default:()=> [],
     }
  },
  data() {
    return {
      TabCur: 0,
      scrollLeft: 0,
      themeColor: this.myCommonColor.themeColor // 全局主题
    }
  },
  methods: {
    tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
    }
  }
}
</script>

<style></style>
