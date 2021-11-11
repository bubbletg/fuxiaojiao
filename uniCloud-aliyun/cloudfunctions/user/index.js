"use strict"
// const {
// 	mpWxGetSessionKey
// } = require('wx-auth')

const db = uniCloud.database()
const collection = db.collection("user")
const uniID = require("uni-id")

exports.main = async (event, context) => {
  const { operation, data } = event
  // 通过微信登录
  if (operation === "loginByWeixin") {
    // 这里会根据code 创建用户信息，并返回
    const loginInfo = await uniID.loginByWeixin({
      code: data.code
    })
    // 拿到用户信息
    const { nickName, avatarUrl, openId } = data.userInfo
    // 把用户信息更新
    await uniID.updateUser({
      uid: loginInfo.uid,
      nickName,
      avatarUrl,
      openId
    })
    // 查询更新后的
    return await uniID.getUserInfo({ uid: loginInfo.uid })
  }
}
