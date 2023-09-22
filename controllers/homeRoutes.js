const router = require('express').Router();
const { User, Plan } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const planData = await Plan.findAll({
      order: [['likes', 'ASC']],
    });

    res.render('homepage', {
      planData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/profile', withAuth, async (req, res) => {
    try {
      
    const planData = await Plan.findAll({
      where: {
        user_id: req.session.user_id,
      }
    });
  
      res.render('profile', {
        planData,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;