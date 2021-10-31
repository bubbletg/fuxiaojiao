<template>
  <view>
    <HSwiper @enterInto="enterIntoSwiper" />
    <ShopsList @ceshi01="ceshi02" />
  </view>
</template>

<script>
import HSwiper from "@/components/swiper/swiper.vue"
import ShopsList from "@/components/ShopsList/ShopsList.vue"
export default {
  components: {
    HSwiper,
    ShopsList
  },
  data() {
    return {}
  },
  methods: {
    enterIntoSwiper(item) {
      console.log(item)
    }
  }
}
</script>

<style></style>
