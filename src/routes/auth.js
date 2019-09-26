var express = require('express');
var router = express.Router();

let authController = require('../controllers/authController');

/**
 * @route       GET api/auth
 * @access      Public
 * @description Returns a user given a user id
 */
router.get('/', authController.getUser);

router.post('/', authController.getToken);

module.exports = router;