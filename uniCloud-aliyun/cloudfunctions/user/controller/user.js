const { Controller } = require("uni-cloud-router")
module.exports = class UserController extends Controller {
  async userLogin() {
    const { ctx, service } = this
    const uid = ctx.data.uid
    return service.user.userLogin(ctx.data, uid)
  }
}
