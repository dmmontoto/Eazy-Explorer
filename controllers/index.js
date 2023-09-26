const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');



router.use('/', homeRoutes);
router.use('/api', apiRoutes);



// eslint-disable-next-line no-undef
module.exports = router;
