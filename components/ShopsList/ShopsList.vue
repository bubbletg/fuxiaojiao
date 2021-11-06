<template>
  <view>
    <view class="cu-card article">
      <view
        class="cu-item shadow"
        v-for="(item, index) in shopsList"
        @click="enterInto(item)"
        :key="index"
      >
        <view class="content">
          <image class="image" :src="item.shopImg" mode="aspectFill"></image>
          <view class="desc">
            <view class="title text-cut">{{ item.title }}</view>
            <view class="text-sm margin-top-xs">
              <view class="flex align-center margin-tb-xs">
                <view class="cu-capsule radius margin-right-sm">
                  <view
                    class="cu-tag sm"
                    :class="true ? `bg-${item.collects.collectColor}` : ''"
                  >
                    <text class="cuIcon-likefill"></text>
                  </view>
                  <view
                    class="cu-tag sm"
                    :class="true ? `line-${item.collects.collectColor}` : ''"
                  >
                    {{ item.collects.collect }}
                  </view>
                </view>
                <text class="margin-right-xs">月销售: </text>
                <text>{{ item.monthlySales }}</text>
              </view>
              <view>
                <text class="margin-right-xs">起送 </text>
                <text class="text-price">{{ item.minimumDeliveryAmount }}</text>
                <text class="margin-lr-xs">配送</text>
                <text class="text-price">{{ item.deliveryPrice }}</text>
              </view>
            </view>
            <view class="text-xs margin-top-xs">
              <view
                v-for="(label, index) in item.labels"
                :key="index"
                class="cu-tag radius sm round margin-top-xs"
                :class="true ? `bg-${label.labelColor}` : ''"
              >
                {{ label.labelTitle }}</view
              >
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      shopsList: [
        {
          id: 1,
          title: "这还是放假了深刻的房间拉屎的风景",
          minimumDeliveryAmount: 0, // 起送价
          deliveryPrice: 1.5, // 配送费
          monthlySales: 300, // 月销
          shopImg:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
          collects: {
            collectColor: "red",
            collect: 88
          },
          labels: [
            {
              labelTitle: "开始",
              labelColor: "green",
              type: 0
            },
            {
              labelTitle: "这是标签",
              labelColor: "mauve",
              type: 0
            },
            {
              labelTitle: "这是一签",
              labelColor: "red",
              type: 0
            },
            {
              labelTitle: "一个标签",
              labelColor: "purple",
              type: 0
            }
          ]
        },
        {
          id: 2,
          title: "这还是放假了深刻的房间拉屎的风景",
          minimumDeliveryAmount: 0, // 起送价
          deliveryPrice: 1.5, // 配送费
          monthlySales: 300, // 月销
          shopImg:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
          collects: {
            collectColor: "red",
            collect: 88
          },
          labels: [
            {
              labelTitle: "开始",
              labelColor: "green",
              type: 0
            },
            {
              labelTitle: "这是标签",
              labelColor: "mauve",
              type: 0
            },
            {
              labelTitle: "这是一签",
              labelColor: "red",
              type: 0
            },
            {
              labelTitle: "一个标签",
              labelColor: "purple",
              type: 0
            }
          ]
        },
        {
          id: 3,
          title: "这还是放假了深刻的房间拉屎的风景",
          minimumDeliveryAmount: 0, // 起送价
          deliveryPrice: 1.5, // 配送费
          monthlySales: 300, // 月销
          shopImg:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
          collects: {
            collectColor: "red",
            collect: 88
          },
          labels: [
            {
              labelTitle: "开始",
              labelColor: "green",
              type: 0
            },
            {
              labelTitle: "这是标签",
              labelColor: "mauve",
              type: 0
            },
            {
              labelTitle: "这是一签",
              labelColor: "red",
              type: 0
            },
            {
              labelTitle: "一个标签",
              labelColor: "purple",
              type: 0
            }
          ]
        },
        {
          id: 4,
          title: "这还是放假了深刻的房间拉屎的风景",
          minimumDeliveryAmount: 0, // 起送价
          deliveryPrice: 1.5, // 配送费
          monthlySales: 300, // 月销
          shopImg:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
          collects: {
            collectColor: "red",
            collect: 88
          },
          labels: [
            {
              labelTitle: "开始",
              labelColor: "green",
              type: 0
            },
            {
              labelTitle: "这是标签",
              labelColor: "mauve",
              type: 0
            },
            {
              labelTitle: "这是一签",
              labelColor: "red",
              type: 0
            },
            {
              labelTitle: "一个标签",
              labelColor: "purple",
              type: 0
            }
          ]
        }
      ]
    }
  },
  methods: {
    enterInto(obj) {
      uni.navigateTo({
        url: `/pages/merchant/merchant?id=${obj.id}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cu-card {
  .cu-item {
    padding: 30upx;
    .content {
      padding: 0;
      flex-direction: row;
      .image {
        width: 180upx;
      }
      .title {
        max-width: 450upx;
        font-weight: 500;
        line-height: 30upx;
        padding: 0;
      }
    }
  }
}
</style>
