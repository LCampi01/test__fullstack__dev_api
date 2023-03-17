const {UserService} = include('services');

class UserController {
    static async getUsers(req, res, next) {
        try {
            const filters = req.query;
            const users = await UserService.getUsers(filters);
            res.send({users});
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController;
