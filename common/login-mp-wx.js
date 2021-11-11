import { loginByWeixin } from "../api"
import { msg } from "../utils"
export default {
  methods: {
    // 获得授权，并得到用户信息
    async getUserProfile(fn) {
      uni.getUserProfile({
        desc: "用于登录",
        success: async userInfoData => {
          const res = await this.mpWxGetUserInfo(userInfoData)
          const userInfo = res.userInfo
          fn(userInfo)
          if (res.code) {
            new Error("登录失败！")
          }
          msg("登陆成功")
          uni.setStorageSync("userInfo", JSON.stringify(userInfo))
        }
      })
    },
    // 通过得到用户信息，登录
    async mpWxGetUserInfo({ userInfo }) {
      const [errlogin, loginData] = await uni.login({ provider: "weixin" })
      const [errinfo, userData] = await uni.getUserInfo()
      const res = await loginByWeixin(
        {
          code: loginData.code,
          encryptedData: userData.encryptedData,
          iv: userData.iv,
          userInfo
        },
        {
          showLoading: true
        }
      )
      return res
    }
  }
}
