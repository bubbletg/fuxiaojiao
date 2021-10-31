<template>
  <view class="swiper-wrap">
    <swiper
      class="card-swiper"
      :class="dotStyle ? 'square-dot' : 'round-dot'"
      :indicator-dots="true"
      :circular="true"
      :autoplay="true"
      interval="5000"
      duration="500"
      @change.stop.prevent="cardSwiper"
      indicator-color="#8799a3"
      indicator-active-color="#0081ff"
    >
      <swiper-item
        v-for="(item, index) in swiperList"
        :key="index"
        :class="cardCur == index ? 'cur' : ''"
      >
        <view class="swiper-item" @click.stop="enterInto(item)">
          <image
            :src="item.url"
            mode="aspectFill"
            v-if="item.type == 'image'"
          ></image>
          <video
            :src="item.url"
            autoplay
            loop
            muted
            :show-play-btn="false"
            :controls="false"
            objectFit="cover"
            v-if="item.type == 'video'"
          ></video>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  props: {
    // swiperList: {
    //   type: Array,
    //   default: () => []
    // }
  },
  data() {
    return {
      cardCur: 0,
      swiperList: [
        {
          id: 0,
          type: "image",
          url: "../../static/swiper/244.jpg",
          enterType: "shops"
        },
        {
          id: 1,
          type: "image",
          url: require("../../static/swiper/3435.jpg"),
          enterType: "shops"
        },
        {
          id: 2,
          type: "image",
          url: "../../static/swiper/123213.jpg",
          enterType: "shops"
        },
        {
          id: 3,
          type: "image",
          url: "../../static/swiper/m7.png",
          enterType: "pages"
        }
      ]
    }
  },
  created() {
    this.TowerSwiper("swiperList")
  },
  methods: {
    enterInto(item) {
      this.$emit("enterInto", item)
    },
    cardSwiper(e) {
      this.cardCur = e.detail.current
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
