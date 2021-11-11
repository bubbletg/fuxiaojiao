const { Service } = require("uni-cloud-router")
const uniID = require("uni-id")
module.exports = class UserService extends Service {
  async userLogin({ code, userInfo }, uid) {
    // 这里会根据code 创建用户信息，并返回
    const loginInfo = await uniID.loginByWeixin({ code })
    // 拿到用户信息
    const { nickName, avatarUrl, openId } = userInfo
    // 把用户信息更新
    await uniID.updateUser({
      uid,
      nickName,
      avatarUrl,
      openId
    })
    // 查询更新后的
    return await uniID.getUserInfo({ uid: loginInfo.uid })
  }
}
