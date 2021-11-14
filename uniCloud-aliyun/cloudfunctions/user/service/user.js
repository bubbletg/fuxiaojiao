const { Service } = require("uni-cloud-router")
const uniID = require("uni-id")
module.exports = class UserService extends Service {
  async userLogin({ code, userInfo }) {
    // 拿到用户信息
    let { nickName, avatarUrl, openId } = userInfo
    // 这里会根据code 创建用户信息
    const resInfo = await uniID.loginByWeixin({ code })
    userInfo = resInfo.userInfo
    if (!userInfo.role) {
      // 权限为null/undefined，只有新创建用户才会这样
      // 初始化为普通用户
      userInfo.role = ["normal_user"]
    }

    // 把用户信息更新
    await uniID.updateUser({
      uid: resInfo.uid,
      nickName,
      avatarUrl,
      openId,
      role: userInfo.role
    })
    // 查询更新后的
    return await uniID.getUserInfo({ uid: resInfo.uid })
  }
}
