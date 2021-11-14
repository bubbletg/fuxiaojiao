const { Controller } = require("uni-cloud-router")
module.exports = class UserController extends Controller {
  async userLogin() {
    const { ctx, service } = this
    return service.user.userLogin(ctx.data)
  }
}
