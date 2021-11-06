<template>
  <view>
    <HSwiper :swiperList="swiperList" />
    <ShopsList :shopsList="shopsList"/>
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
    return {
      swiperList: [
        {
          id: 0,
          type: "image",
          url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
          enterType: "shops"
        },
        {
          id: 3,
          type: "image",
          url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
          enterType: "pages"
        }
      ],
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
  methods: {}
}
</script>

<style></style>
