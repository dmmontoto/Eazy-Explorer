const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/signup', async (req, res) => {
  try {
    const findData = await User.findOne({ where: { email: req.body.email } });
    if (findData) {
      res
        .status(400)
        .json({ message: 'Email already exists!' });
      console.log('Email already exists!');
      return;
    }

    if (req.body.password.length != 8) {
      res
        .status(400)
        .json({ message: 'Password should be 8 characters' });
      console.log('Password should be 8 characters');
      return;
    }

    const userData = User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(200).json({ user: userData, message: 'You are now signed up!' });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
