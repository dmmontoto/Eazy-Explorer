const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      console.log(req.body);
      const newComment = await Comment.create({
        description: req.body.description, 
        plan_id: req.body.plan_id, 
        user_id: req.session.user_id,
      });
      console.log(newComment);
  
      res.redirect(`/plan/${req.body.plan_id}`);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });

module.exports = router;