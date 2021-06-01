const ApiError = require("../error/api.error");

class UserController {
  async checkRegistration(req, res) {}

  // test error
  // async checkRegistration(req, res, next) {
  //   const { id } = req.query;
  //   if (!id) {
  //     next(ApiError.badRequest("no id"));
  //   }
  // }

  async getUserData(req, res) {}

  async registration(req, res) {}
}

module.exports = new UserController();
