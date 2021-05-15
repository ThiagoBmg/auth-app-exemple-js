const router = require('express').Router();
const controller = require('../controller/users');

router.post('/cad-new-user', controller.create);

router.post('/auth',controller.login);

module.exports = router;