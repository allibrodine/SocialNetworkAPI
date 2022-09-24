const router = require('express').Router();

//import routes from /api/index.js
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('Error!');
});

module.exports = router;