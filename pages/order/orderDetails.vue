<template>
  <view>
    <CuCustom :bgColor="`bg-${themeColor} text-white`" />
    <view class="order-detalis bg-gray">
      <view class="order-detalis-top">
        <text class="order-detalis-top-text">订单已完成</text>
        <text class="text-black cuIcon-right margin-left-xs"></text>
      </view>
      <scroll-view scroll-y class="order-detalis-scroll">
        <!-- 商品信息 -->
        <view class="order-detalis-shops-wrap">
          <view class="order-detalis-shops">
            <viem class="text-xl margin-bottom-sm">
              {{ shops.title }}
              <text class="xs text-black cuIcon-right margin-left-xs"></text>
            </viem>
            <view class="order-detalis-shops-goods solid-bottom solid-top">
              <view
                class="order-detalis-shops-goods-item flex"
                v-for="(good, index) in shops.goods"
                :key="index"
              >
                <view
                  class="cu-avatar xl margin-right-xs radius"
                  :style="{ backgroundImage: `url(${good.goodsImg});` }"
                ></view>
                <view class="text-gray order-detalis-shops-goods-item-right">
                  <view class="text-black lg flex justify-between">
                    <text>{{ good.goodsTitle }}</text>
                    <text>¥{{ good.totalPrices }}</text>
                  </view>
                  <text class="xl margin-tb-xs">
                    {{ good.count + "" + good.unit }}</text
                  >
                  <text class="xl">X{{ good.count }}</text>
                </view>
              </view>
            </view>
            <view class="flex justify-between margin-tb-sm">
              <text>打包费</text>
              <text>¥{{ shops.packingCharges }}</text>
            </view>
            <view class="flex justify-between margin-tb-sm">
              <text>配送费</text>
              <text>¥0</text>
            </view>
            <view class="solid-bottom"></view>
            <view class="flex justify-between margin-tb-sm">
              <text>减免</text>
              <text class="text-red">-¥1</text>
            </view>
            <view class="solid-top flex justify-end align-center padding-tb-sm">
              <text class="margin-right-sm">合计</text>
              <text class="text-red">¥{{ shops.totalPrices }}</text>
            </view>
          </view>
          <view
            class="order-detalis-shops-button flex justify-center align-center"
            @click="makePhoneCall(17863273072)"
          >
            <text class="cuIcon-dianhua">致电商家</text>
          </view>
        </view>
        <!-- 配送信息 -->
        <view class="order-detalis-distribution">
          <view class="order-detalis-distribution-wrap">
            <view class="solid-bottom text-xl padding-bottom-xs">配送信息</view>
            <view v-if="distribution.isDistribution" class="margin-tb-sm">
              <view class="flex justify-between align-center">
                <text class="text-gray flex-sub">配送地址</text>
                <text class="text-right flex-twice"
                >这是个个好啊后好打发的酸辣粉老地方见啊；史蒂夫多少分啊滴fads发发发了空间地方是大发大发的方法</text
                >
              </view>
              <view class="flex justify-end margin-top-sm">
                <text class="flex">{{distribution.consignee +'  '+ distribution.phone}}</text>
              </view>
            </view>
            <view
              v-if="!distribution.isDistribution"
              class="flex justify-center margin"
            >
              该订单为到店自取订单
            </view>
          </view>

          <view
            class="order-detalis-shops-button flex justify-center align-center"
            @click="makePhoneCall(17863273072)"
          >
            <text class="cuIcon-dianhua">致电骑手</text>
          </view>
        </view>
        <text class="margin-tb-sm flex justify-center">到底啦～</text>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      shops: {
        titleImg:
          "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        title: "江南饺子店",
        hint: "这是一个提示",
        packingCharges: 31,
        totalPrices: 11,
        goods: [
          {
            goodsImg:
              "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
            goodsTitle: "商品商品01010010",
            unit: "晚",
            count: 1,
            totalPrices: 18
          },
          {
            goodsImg:
              "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
            goodsTitle: "商品商品01010010",
            unit: "晚",
            count: 1,
            totalPrices: 18
          }
        ]
      },
      distribution: {
        isDistribution: true, // 是否配送
        consignee: "田先生",
        phone: 17863273072
      },
      themeColor: this.myCommonColor.themeColor // 全局主题
    }
  },
  methods: {
    makePhoneCall(phoneNumber) {
      uni.makePhoneCall({
        phoneNumber: "" + phoneNumber,
        complete: res => {
          console.log(res)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.order-detalis {
  padding: 0 20upx;
  &-top-text {
    font-size: 25px;
  }
  &-top {
    margin-bottom: 20upx;
    .cuIcon-right {
      font-size: 20px;
    }
  }
  &-scroll {
    height: 84vh;
  }
  &-shops-wrap {
    border-radius: 10px;
    overflow: hidden;
  }
  &-shops {
    padding: 20upx;
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    &-goods {
      &-item {
        margin: 20upx 0;
        &-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          justify-content: between;
        }
      }
    }
  }
  &-shops-button {
    padding: 20upx;
    background: rgb(171, 168, 168);
  }
  &-distribution {
    border-radius: 10px;
    overflow: hidden;
    margin-top: 20upx;

    &-wrap {
      padding: 20upx;
      background-color: #fff;
    }
  }
}
</style>
