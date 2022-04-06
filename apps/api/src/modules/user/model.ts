import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init(
  {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.TEXT },
    password: { type: DataTypes.TEXT },
    role: { type: DataTypes.TEXT },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

// User.hasMany(Subscription)
export default User;
