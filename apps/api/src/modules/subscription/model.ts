import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

class Subscription extends Model {}

Subscription.init(
  {
    userId: {
      type: DataTypes.INTEGER,
    },
    crateId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'Subscription',
  }
);
