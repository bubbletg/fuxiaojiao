import request from "../utils/request.js"

/**
 * 用户登录微信
 * @param {*} data 请求数据
 * @param {*} config 配置信息
 * @returns {UserInfo} 用户信息
 */
export const loginByWeixin = async (data, config) => {
  return await request("user", "loginByWeixin", data, config)
}
