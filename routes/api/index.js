const router = require('express').Router();
const userRoutes = require('./user-routes');

//add `/user` prefix to routes in user-controller.js
router.use('/user', userRoutes);

module.exports = router;