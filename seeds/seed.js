const sequelize = require('../config/connection');
const { User, Plan } = require('../models');

const userData = require('./userData.json');
const planData = require('./planData.json');
// const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const plan of planData) {
    await Plan.create({
      ...plan,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  /*const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });
*/
  process.exit(0);
};

seedDatabase();