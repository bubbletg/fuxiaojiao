<template>
  <view>
    <CuCustom
      :isBack="true"
      :bgColor="`bg-${themeColor} text-white`"
      :backUrl="backUrl"
    >
    </CuCustom>
    <uni-collapse>
      <uni-collapse-item
        class="text-lg"
        v-for="(item, index) in helpLIst"
        :key="index"
        :title="item.classifyName"
        :open="item.isOpen"
      >
        <view class="helps" v-for="(help, index) in item.helps" :key="index">
          <view class="text-lg margin-bottom-sm" :class="true?`text-${themeColor}`:''">{{ help.title }}</view>
          <text>{{ help.value }}</text>
        </view>
      </uni-collapse-item>
    </uni-collapse>
  </view>
</template>

<script>
export default {
  data() {
    return {
      helpLIst: [
        {
          classifyName: "订单问题",
          isOpen: true,
          helps: [
            {
              title: "订单为什么不支持在线支付？",
              value:
                "根据商家需求，该小程序只提供商品的预订功能，目前只支持线下支付噢，后期会逐渐支持的，感谢理解。"
            },
            {
              title: "为什么不支持外卖模式？",
              value:
                "由于商品的配送是支持是由商家后台控制并进行自己配送的，平台不参与配送服务，若预订时不支持配送，可以联系商家进行处理哦。"
            },
            {
              title: "怎么联系商家？",
              value:
                "在商家页面或订单详情页面都能有商家的联系方式，可以通过打电话方式联系到商家哦。"
            },
            {
              title: "怎么查看订单？",
              value:
                "点击【订单】，即可查看订单列表，点击相应的订单，即可进入订单详情。"
            }
          ]
        },
        {
          classifyName: "账户问题",
          isOpen: true,
          helps: [
            {
              title: "可以注销账户吗？",
              value:
                "因为采用的微信统一认证登录，目前不支持注销账户的，如果不需要使用该小程序，可以在我的小程序里面删除即可。"
            },
            {
              title: "可以修改手机密码吗？",
              value:
                "因为采用的微信统一认证登录，采用的是默认绑定微信手机号码，目前不支持注修改的。"
            }
          ]
        }
      ],
      themeColor: this.myCommonColor.themeColor // 全局主题
    }
  }
}
</script>

<style lang="scss" scoped>
.helps{
  margin:10upx 20upx;
}
</style>
