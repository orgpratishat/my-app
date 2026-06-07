const express = require('express');
const router = express.Router();

const personalSignupRoute = require('./personalSignup');

router.use(personalSignupRoute);

module.exports = router;
