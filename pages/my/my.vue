<template>
  <view>
    <view
      class="my-header flex align-center text-white"
      :class="themeColor ? `bg-${themeColor}` : ''"
    >
      <view
        class="cu-avatar xl round margin-left margin-right-xs"
        :style="{ backgroundImage: `url(${userInfo.avatarUrl});` }"
      >
      </view>
      <view class="my-nickname" v-if="isLogin">
        <text class="margin-bottom-xs">{{ userInfo.nickName }}</text>
        <text>ID: {{ userInfo._id }}</text>
      </view>
      <view v-else class="flex flex-direction">
        <button class="cu-btn bg-pink lg" @click="getuserinfo">登录</button>
      </view>
    </view>
    <view
      class="cu-list menu sm-border card-menu margin-top"
      v-for="(menu, index) in menuList"
      :key="index"
    >
      <view
        class="cu-item arrow"
        v-for="item in menu"
        :key="item.to"
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
import loginMpWx from "@/common/login-mp-wx.js"
import { msg } from "../../utils"
export default {
  mixins: [loginMpWx],
  data() {
    return {
      isLogin: false,
      userInfo: {
        avatarUrl: "",
        nickName: "",
        id: ""
      },
      menuList: [[], []],
      themeColor: this.myCommonColor.themeColor // 全局主题
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.getuserinfo("get")
      const menuList = [[], []]
      menuList[0] = [
        {
          icon: "cartfill",
          iconColor: this.themeColor,
          title: "我的预订",
          lable: "查看我的预订",
          to: "/pages/order/order"
        }
        // {
        //   icon: "location",
        //   iconColor: this.themeColor,
        //   title: "我的地址",
        //   lable: "查看我的地址",
        //   to: "/my/my"
        // }
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
          to: "/pages/admin/index"
        },
        {
          icon: "question",
          iconColor: "green",
          title: "帮助中心",
          lable: "",
          to: "/pages/my/help"
        },
        {
          icon: "group",
          iconColor: "green",
          title: "关于我们",
          lable: "",
          to: "/pages/my/aboutus"
        }
      ]
      this.menuList = menuList
    },
    enterInto(to) {
      // 底部状态栏切换列表，不进入二级页面
      const list = ["/pages/order/order"]
      if (list.indexOf(to) > -1) {
        const tos = to.split("/")
        const obj = {
          page: `/${tos[1]}/${tos[2]}`
        }
        this.$emit("switchPage", obj)
      } else {
        if (to === "/pages/admin/index" && this.userInfo.role.indexOf("admin") < 0) {
          msg("没有权限")
          return
        }
        uni.navigateTo({
          url: to
        })
      }
    },
    // 获得用户信息
    /**
     * type = 0 表示自动判断是否登录，没有登录需要手动触发
     */
    getuserinfo(type) {
      const setuserInfo = userInfo => {
        this.isLogin = userInfo ? true : false
        this.userInfo = userInfo
      }
      let userInfo = null
      try {
        userInfo = JSON.parse(uni.getStorageSync("userInfo"))
      } catch (err) {
      } finally {
        if (type != "get") {
          this.getUserProfile(setuserInfo)
        }
        setuserInfo(userInfo)
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
