<template>
  <!-- 购物车 -->
  <view class="cart-wrap">
    <view class="cart-content">
    <view v-show="!isShowCartLIst" class="cart-hint light bg-mauve radius text-center shadow-blur text-cut">
      {{shopTip}}
    </view>
    <view class="cu-bar bg-black tabbar border shop cart">
      <view class="action" @click="isShowCartLIst=!isShowCartLIst">
        <view class="cuIcon-cart">
          <view class="cu-tag badge">99</view>
        </view>
        购物车
      </view>
      <view class="content-wrap text-xs">
        <view class="cart-total-price padding-bottom-xs">
          <text class="text-xs">优惠后</text>
          <text class="text-lg discount-price">¥{{discountPrice}}</text>
          <text class="text-xs text-dd">¥{{discountPrice}}</text>
        </view>
        <view class="flex">
          <!-- todo 第一版先不做，后期加上 -->
          <!-- <view
            class="flex padding-right-xs"
            style="color:#9c26b0;"
            @click="priceDetailFold =!priceDetailFold"
          >
            <text :decode="true">优惠明细</text>
            <text :class="priceDetailFold?'cuIcon-fold':'cuIcon-unfold'"
              class="text-sm"
              style="margin-top:6upx;">
            </text>
          </view> -->
          <view>
            <text :decode="true"> 预估配送费  ¥0</text>
          </view>
        </view>
      </view>
      <view class="btn-group" @click="inOrderClick">
        <button class="cu-btn bg-mauve round shadow-blur" >立即订购</button>
      </view>
    </view>
    </view>
    <CartLIst v-show="isShowCartLIst"/>
  </view>
</template>

<script>
import CartLIst from './cartLIst.vue'
export default {
  components: {
    CartLIst
  },
  data(){
    return {
      shopTip: '满20送10，满300送50，满1000送10000，啊啊啊啊啊啊啊啊啊啊啊啊啊',
      priceDetailFold:true,
      isShowCartLIst: true,
      discountPrice:100,
    }
  },
  methods: {
    inOrderClick(){
      uni.navigateTo({ url: '/pages/order/submitOrder' })
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-wrap {
  position: fixed;
  left: 20upx;
  right: 20upx;
  bottom: 10upx;
  .cart-content{
    position: relative;
    z-index: 2;
  }
  .cart-hint {
    position: absolute;
    top: -40upx;
    left: 50%;
    width: 90%;
    padding: 2upx 10upx;
    transform: translateX(-50%);
  }
  .cart {
    border-radius: 30upx;
    overflow: hidden;
    .content-wrap {
      width: 50%;
      padding-left: 40upx;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      z-index:0;
      .cart-total-price{
        text {
          display:inline-block;
        }
        .discount-price{
          padding:0 10upx;
        }
      }
    }
  }
}
</style>
