const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//add `/user` prefix to routes in user-controller.js
router.use('/user', userRoutes);
//add `/thought` prefix to routes in thought-controller.js
router.use('/thought', thoughtRoutes);

module.exports = router;