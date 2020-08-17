const { DataTypes } = require('sequelize');

export class Models {
  constructor(private sequelize) {}

  user() {
    return this.sequelize.define(
      'USER',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        USERNAME: {
          type: DataTypes.STRING,
        },
        PASSWORD: {
          type: DataTypes.STRING,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  }
}
