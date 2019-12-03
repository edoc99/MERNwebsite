// routes
const router = require('express').Router();

const handle = require('../handlers');
const auth = require('../middlewares/auth');

router
    .route('/')
    .get(handle.showUsers)
    .post(auth, handle.showUserInfo);

module.exports = router;