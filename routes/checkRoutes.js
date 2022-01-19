const express = require('express');
const router = express.Router();
const { checkIn, getMyCheck, getAdminCheckData,getAllUsersForOptions } = require('../controller/checkController');



const {protect, admin} = require('../middleware/authUserMiddleware');

router.route('/check').get(protect, getMyCheck)
router.route('/select').get(protect, getAllUsersForOptions).post(protect, checkIn);
router.route('/adcheck').get(protect,admin, getAdminCheckData);

module.exports = router;