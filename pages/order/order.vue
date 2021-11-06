<template>
  <view>
    <view class="margin-bottom-xs">
      <Nav :navList="navList" />
    </view>
    <scroll-view scroll-y class="order-list">
      <view
        class="cu-card case"
        v-for="(item, index) in orderList"
        :key="index"
      >
        <view class="cu-item shadow padding-sm">
          <!-- 标题 -->
          <view class="flex justify-between">
            <view class="flex justify-start margin-bottom-xs">
              <view
                class="cu-avatar df margin-top-xs margin-right-xs radius"
                :style="{ backgroundImage: `url(${item.titleImg});` }"
              ></view>
              <view class="order-list-item-title">
                <viem class="text-lg">
                  {{ item.title }}
                  <text
                    class="xs text-black cuIcon-right margin-left-xs"
                  ></text>
                </viem>
                <text class="text-xs text-black">{{ item.hint }}</text>
                <text class="text-xs text-black" v-if="index===0">{{ item.hint }}</text>
              </view>
            </view>
            <view class="text-gray"> 已完成 </view>
          </view>
          <!-- 商品 -->
          <view class="goods cu-list menu-avatar flex justify-between">
            <scroll-view
              scroll-x="true"
              scroll-with-animation
              class="goods-scroll"
            >
              <view class="goods-scroll-view">
                <view
                  v-for="(good, index) in item.goods"
                  :key="index"
                  class="goods-item"
                >
                  <view
                    class="cu-avatar xl margin-right-xs radius"
                    :style="{ backgroundImage: `url(${good.goodsImg});` }"
                  ></view>
                  <text class="xl text-cut">{{ good.goodsTitle }}</text>
                </view>
              </view>
            </scroll-view>
            <view class="goods-size flex justify-center">
              <text>¥25.5</text>
              <text class="text-sm text-gray">共计3件</text>
            </view>
          </view>
          <!-- 底部 -->
          <view class="flex justify-end margin-top-sm">
            <button class="cu-btn round line-mauve shadow sm" @click="clickRecur(item)" >再来一单</button>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import Nav from "@/components/nav/nav.vue"
export default {
  components: {
    Nav
  },
  data() {
    return {
      navList: [
        {
          name: "全部"
        }
      ],
      orderList: [
        {
          titleImg:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
          title: "江南饺子店",
          hint: "这是一个提示",
          goods: [
            {
              goodsImg:
                "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
              goodsTitle: "商品商品01010010"
            },
            {
              goodsImg:
                "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
              goodsTitle: "商品商品01010010"
            }
          ]
        },
        {
          titleImg:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
          title: "江南饺子店",
          hint: "这是一个提示",
          goods: [
            {
              goodsImg:
                "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
              goodsTitle: "商品商品01010010"
            },
            {
              goodsImg:
                "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
              goodsTitle: "商品商品01010010"
            }
          ]
        },
        {
          titleImg:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
          title: "江南饺子店",
          hint: "这是一个提示",
          goods: [
            {
              goodsImg:
                "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
              goodsTitle: "商品商品01010010"
            },
            {
              goodsImg:
                "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
              goodsTitle: "商品商品01010010"
            }
          ]
        },
        {
          titleImg:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
          title: "江南饺子店",
          hint: "这是一个提示",
          goods: [
            {
              goodsImg:
                "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
              goodsTitle: "商品商品01010010"
            },
            {
              goodsImg:
                "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
              goodsTitle: "商品商品01010010"
            }
          ]
        }
      ]
    }
  },
  methods: {
    clickRecur(item){
    console.log('`````````````',item)
  }
  }
}
</script>

<style lang="scss" scoped>
.order-list {
  height:75vh;
  .cu-card > .cu-item {
    margin: 10upx 20upx;
  }
  &-item-title {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .goods {
    .cu-avatar.xl {
      width: 160upx;
    }
    &-scroll {
      margin-right: 20upx;
      height: 170upx;
      overflow: hidden;
      &-view {
        float: left;
        display: flex;
      }
    }
    &-item {
      display: inline-block;
      width: 170upx;
      height: 170upx;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    &-size {
      width: 160upx;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
