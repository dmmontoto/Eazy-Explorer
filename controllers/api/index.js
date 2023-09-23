const router = require('express').Router();

const userRoutes = require('./userRoutes');
const planRoutes = require('./planRoutes');


router.use('/users', userRoutes);
router.use('/plans', planRoutes);

module.exports = router;
