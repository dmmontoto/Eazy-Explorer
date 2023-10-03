const router = require('express').Router();

const userRoutes = require('./userRoutes');
const planRoutes = require('./planRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/users', userRoutes);
router.use('/plan', planRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
