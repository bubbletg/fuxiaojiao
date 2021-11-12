const { Service } = require("uni-cloud-router")
const uniID = require("uni-id")
module.exports = class UserService extends Service {
  async userLogin({ code, userInfo }, uid) {
    // 拿到用户信息
    let { nickName, avatarUrl, openId, role } = userInfo

    let loginInfo = null
    // 不存在uid 表示用户为第一次注册
    if (!uid) {
      // 这里会根据code 创建用户信息
      loginInfo = await uniID.loginByWeixin({ code })
      uid = loginInfo.uid
      // 权限为null/undefined，只有新创建用户才会这样
      // 初始化为普通用户
      role = ["normal_user"]
    }

    // 把用户信息更新
    await uniID.updateUser({
      uid,
      nickName,
      avatarUrl,
      openId,
      role
    })
    // 查询更新后的
    return await uniID.getUserInfo({ uid })
  }
}
