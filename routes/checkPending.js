const express = require('express');
const { checkInPending, getAdminCheckPendingData, postAdminCheckApprovePendingData, deletePendingCheck } = require('../controller/checkPendingController');
const router = express.Router();



const {protect, admin} = require('../middleware/authUserMiddleware');

// router.route('/check').get(protect, getMyCheck)
router.route('/selectpending').post(protect, checkInPending);
router.route('/pendingadcheck').get(protect,admin, getAdminCheckPendingData);
router.route('/pendingcheck').post(protect,admin, postAdminCheckApprovePendingData).delete(protect, admin, deletePendingCheck);
router.route('/pendingcheckdelete/:id').delete(protect, admin, deletePendingCheck);

module.exports = router;