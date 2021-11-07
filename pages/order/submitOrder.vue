<template>
  <view>
    <CuCustom :isBack="true" :bgColor="`bg-${themeColor} text-white`">
      <block slot="content">提交订单</block>
    </CuCustom>
    <view
      :class="true ? `bg-${themeColor}` : ''"
      style="height: 20vh; position: relative"
    >
      <view class="order-detalis-top">
        <view class="order-detalis-top-title flex justify-between">
          <view
            class="order-detalis-top-title-left text-black"
            :class="{ current: distribution.isDistribution }"
            @click="switchDistribution"
            >外卖配送</view
          >
          <view
            class="order-detalis-top-title-right text-black"
            :class="{ current: !distribution.isDistribution }"
            @click="distribution.isDistribution = !distribution.isDistribution"
            >到店自取</view
          >
        </view>
        <view
          class="order-detalis-top-content"
          v-if="distribution.isDistribution"
        >
          <view class="text-black flex justify-between align-center">
            <text class="flex-twice address"
              >这厮收获地址，阿萨德粉红色的呢快，但费拉达斯；饭卡第三发；达芙妮阿福那等你</text
            >
            <text class="xs text-gray cuIcon-right margin-left-xs"></text>
          </view>
          <view class="grid col-1 margin-top-xs">
            <view class="flex align-center text-gray">
              <text>姓名</text>
              <text class="margin-left-sm">先生</text>
              <text class="margin-left-sm">17863273072</text>
            </view>
          </view>
          <view class="grid col-1 margin-top-sm">
            <view class="flex align-center justify-between">
              <text class="text-black">立即送出</text>
              <view :class="true ? `text-${themeColor}` : ''">
                <text class="margin-left-sm">10:59~11:20送达</text>
                <text class="xs cuIcon-right margin-left-xs"></text>
              </view>
            </view>
          </view>
          <view :class="true ? `text-${themeColor} text-xs` : ''"
            >恶劣天气下，送达时间可能会延迟，请您耐心等待哦</view
          >
        </view>
        <view class="order-detalis-top-content" v-else>
          <view class="text-black flex justify-between align-center">
            <text class="flex-twice address"
              >这厮收获地址，阿萨德粉红色的呢快，但费拉达斯；饭卡第三发；达芙妮阿福那等你</text
            >
          </view>
          <view class="flex justify-between margin-top-lg">
            <view class="text-gray grid col-1">
              <view>自取时间</view>
              <view>
                <text class="text-black">10:29</text>
                <text class="xs text-gray cuIcon-right margin-left-xs"></text>
              </view>
            </view>
            <view class="text-gray grid col-1">
              <view>预留电话</view>
              <view>
                <text class="text-black">16601119263</text>
                <text class="xs text-gray cuIcon-right margin-left-xs"></text>
              </view>
            </view>
          </view>
          <view
            class="margin-top-sm"
            :class="true ? `text-${themeColor} text-xs` : ''"
            >到店后请提供订单信息哦</view
          >
        </view>
      </view>
    </view>
    <view class="order-detalis bg-gray">
      <view class="order-detalis-wrap">
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
        <view class="submit margin-tb-lg bg-black flex justify-between align-center">
          <view class="bg-black padding-lg">
            <text>¥14.97</text>
            <text class="text-xs margin-left-xs" :class="true ? `text-${themeColor}` : ''">已优惠¥12</text>
          </view>
          <view
            class="padding-lg" :class="true ? `bg-${themeColor}` : ''"
            @click="inOrderClick"
          >提交订单</view>
        </view>
      </view>
    </view>
    <view class="cu-modal" :class="showModal ? 'show' : ''">
      <view class="cu-dialog">
        <view class="padding"> 该功能暂时没有开放 </view>
        <view
          class="padding-sm"
          :class="true ? `bg-${themeColor}` : ''"
          @tap="showModal = false"
        >
          <view class="action flex-sub solid-left">我知道了</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
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
    inOrderClick(){
      uni.navigateTo({ url: '/pages/order/orderDetails' })
    },
    // 切换是否配送
    switchDistribution() {
      this.distribution.isDistribution = !this.distribution.isDistribution
      if (this.distribution.isDistribution) {
        this.showModal = true
        this.distribution.isDistribution = false
        return
      }
    },
    // 打电话
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
.order-detalis-top {
  position: absolute;
  left: 0;
  right: 0;
  margin: 20upx;
  border-radius: 5px;
  overflow: hidden;
  z-index: 3;
  &-title {
    background-color: #fff;
    .current {
      background-color: #fff;
      font-size: 20px;
      height: 80upx;
    }
  }
  &-title-left,
  &-title-right {
    flex: 1;
    height: 60upx;
    padding: 10upx 80upx;
    background-color: rgb(166, 98, 217);
  }
  &-title-left {
    border-radius: 0 0 20px 0;
  }
  &-title-right {
    border-radius: 0 0 0 20px;
  }
  &-content {
    background-color: #fff;
    padding: 0 20upx 20upx;
    height: 20vh;
    .address {
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}

.order-detalis {
  position: relative;
  padding: 0 20upx;
  &-wrap {
    position: relative;
    top: 10vh;
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
  .submit{
    overflow: hidden;
    border-radius: 10px;
  }
}
</style>
