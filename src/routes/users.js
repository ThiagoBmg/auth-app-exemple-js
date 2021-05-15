const router = require('express').Router();
const controller = require('../controller/users');

router.get('/cad-new-user', controller.create);

router.get('/auth',controller.login);

module.exports = router;