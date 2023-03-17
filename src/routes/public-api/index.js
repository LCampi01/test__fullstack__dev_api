const {UserController} = include('controllers');

module.exports = router => {
    router.get('/users', UserController.getUsers);
    return router;
};
