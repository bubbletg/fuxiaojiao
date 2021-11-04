<template>
  <view>
    <view
      class="my-header flex align-center text-white"
      :class="themeColor ? `bg-${themeColor}` : ''"
    >
      <view
        class="cu-avatar xl round margin-left margin-right-xs"
        :style="{ backgroundImage: `url(${headerImg});` }"
      >
      </view>
      <view class="my-nickname" v-if="isLogin">
        <text class="margin-bottom-xs">{{ nickname }}</text>
        <text>ID: {{ id }}</text>
      </view>
      <view v-else class="flex flex-direction">
        <button class="cu-btn bg-pink lg">登录</button>
      </view>
    </view>
    <view
      class="cu-list menu sm-border card-menu margin-top"
      v-for="(menu, index) in menuList"
      :key="index"
    >
      <view
        class="cu-item arrow"
        v-for="(item, index) in menu"
        :key="index"
        @click="enterInto(item.to)"
      >
        <view class="content">
          <text
            :class="
              item.icon ? `cuIcon-${item.icon} text-${item.iconColor}` : ''
            "
          ></text>
          <text class="text-grey">{{ item.title }}</text>
        </view>
        <view class="action">
          <text class="text-grey text-sm">{{ item.lable }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      headerImg: "../../static/shops/house1.png",
      nickname: "BubbleTg",
      id: "FXJ1123123",
      menuList: [[], []],
      themeColor: this.myCommonColor.themeColor // 全局主题
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const menuList = []
      menuList[0] = [
        {
          icon: "cartfill",
          iconColor: this.themeColor,
          title: "我的预订",
          lable: "查看我的预订",
          to: "/pages/calendar/calendar"
        },
        {
          icon: "location",
          iconColor: this.themeColor,
          title: "我的地址",
          lable: "查看我的地址",
          to: "/my/my"
        }
        // {
        //   icon: "location",
        //   iconColor: this.themeColor,
        //   title: "我的收藏",
        //   lable: "查看我的地址",
        //   to: "/my/my"
        // },
        //  {
        //   icon: "location",
        //   iconColor: this.themeColor,
        //   title: "我的评价",
        //   lable: "查看我的地址",
        //   to: "/my/my"
        // },
      ]
      menuList[1] = [
        {
          icon: "peoplelist",
          iconColor: "red",
          title: "管理员入口",
          lable: "",
          to: "/my/my"
        },
        {
          icon: "question",
          iconColor: "green",
          title: "帮助中心",
          lable: "",
          to: "/my/my"
        },
        {
          icon: "group",
          iconColor: "green",
          title: "关于我们",
          lable: "",
          to: "/my/my"
        }
      ]
      this.menuList = menuList
    },
    enterInto(to) {
      const list = ["/pages/calendar/calendar"]
      if (list.indexOf(to) > -1) {
        const tos = to.split("/")
        const obj = {
          page: `/${tos[1]}/${tos[2]}`
        }
        this.$emit("switchPage", obj)
      } else {
        uni.navigateTo({
          url: to
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-header {
  padding: 10upx 0 40upx 0;
  .my-nickname {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
