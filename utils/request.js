/**
 * @param {String} cloudFnName
 * @param {String} operation  操作类型（增删改查）
 * @param {Object} data 请求参数
 * @param {Object} ext 附加参数
 */
const request = (cloudFnName, operation, data = {}, ext = {}) => {
  return new Promise((resolve, reject) => {
    if (ext.showLoading !== false) {
      uni.showLoading()
    }
    uniCloud
      .callFunction({
        name: cloudFnName,
        data: {
          action: operation,
          data
        }
      })
      .then(res => {
        if (ext.showLoading !== false) {
          uni.hideLoading()
        }
        resolve(res.result)
      })
      .catch(err => {
        if (ext.showLoading !== false) {
          uni.hideLoading()
        }
        reject(err)
      })
  })
}

export default request
