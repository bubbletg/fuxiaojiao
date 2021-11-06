<template>
  <view>
    <swiper
      class="card-swiper square-dot"
      :indicator-dots="true"
      :circular="true"
      :autoplay="true"
      @change.stop.prevent="cardSwiper"
      v-if="swiperList.length > 0"
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
    swiperList: {
      type:Array,
      default: () => []
    }
  },
  data() {
    return {
      cardCur: 0,
    }
  },
  methods: {
    enterInto(item) {
      console.log(item)
    },
    cardSwiper(e) {
      this.cardCur = e.detail.current
    }
  }
}
</script>

<style lang="scss" scoped></style>
