const User = require('./User');
const Plan = require('./Plan');
const Comment = require('./Comment');

User.hasMany(Plan, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Plan.belongsTo(User, {
  foreignKey: 'user_id'
});

Plan.hasMany(Comment, {
  foreignKey: 'plan_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Plan, {
  foreignKey: 'plan_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Plan, Comment };